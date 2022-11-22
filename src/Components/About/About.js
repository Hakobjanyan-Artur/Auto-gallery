import axios from 'axios';
import { useEffect, useState, useRef, useCallback } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import AboutItem from '../AboutItem/AboutItem';
import './About.css'
const About = ({setStyleFix}) => {
  const [data, setData] = useState([])
  const [load, setLoad] = useState(true)
  const navigate = useNavigate()
  const [page, setPage] = useState(1)
  const formRef = useRef()
  const [isFetch, setIsFetch] = useState(true)
  const [maxCount, setMaxCount] = useState(0)
    useEffect(() => {
      if (isFetch && (data.length < maxCount || maxCount === 0)) {
        axios.get('https://jsonplaceholder.typicode.com/todos', {
          params:{
            _limit: 25,
            _page: page
          }
        })
        .then((response) => {
          setMaxCount(+response.headers['x-total-count'])
          console.log(page);
          const initialData = response.data.map((el) => ({
            id: el.id,
            title: el.title,
            body: '',
            completed: el.completed,
            isCheck: false
          }))
            setData([...data, ...initialData])
            setLoad(false)
            setPage(page + 1)
          })
          .catch((err) => {
            navigate('/' + err.response.status)
          })
          .finally(() => {
            setIsFetch(false)
          }) 
      }
    }, [isFetch])

    const scrollHandler = (e) => {
      // console.log('ecran ' + e.target.documentElement.scrollHeight);
      // console.log('verevic minchev bar ' + e.target.documentElement.scrollTop);
      // console.log('bar ' + window.innerHeight);
      if (e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop - window.innerHeight < 200) {
        setIsFetch(true)
      }
      if (e.target.documentElement.scrollTop > 174) {
        setStyleFix(true)
      }else{
        setStyleFix(false)
      }
    }

    useEffect(() => {
      document.addEventListener('scroll', scrollHandler)
      return () => {
        document.removeEventListener('scroll', scrollHandler)
      }
    },[])


    const checked = useCallback ((id, checked) => {
      setData((prev) =>[
        ...prev.map(el => {
          if (el.id === id) {
              return {
                ...el,
                isCheck: checked
              }
          }
          return el
        })
      ])
    }, []) 

    const delCheck = () => {
      setData([
        ...data.filter(el => !el.isCheck)
      ])
    } 

    const toggleCompleted = useCallback ((id) => {
      setData((prev) =>[
        ...prev.map(el => {
          if (el.id === id) {
            return {
              ...el,
              completed: !el.completed
            }
          }
          return el
        })
      ])
    }, [])

    const submitForm = (e) => {
      e.preventDefault()
      if (formRef.current[0].value) {
        setData([
          {
            id: new Date().getTime().toString(),
            title: formRef.current[0].value,
            body: '',
            completed: false,
            isCheck: false
          },
          ...data
]) 
      }
      formRef.current[0].value = ''
    }

    const filterCheck = () => {
      setData([
        ...data.filter(el => el.isCheck),
        ...data.filter(el => !el.isCheck)
      ])
    }

    const delItem = useCallback((id) => {
          setData((prev) =>[
              ...prev.filter(el => el.id !== id)
          ])
    }, [])

    return (
        <>
          <h1>About</h1>
          <hr />
          <div className="container">
              <div className="checkBtn">
                <button onClick={() => delCheck()}>Del checked</button>
                <form ref={formRef} onSubmit={submitForm}>
                  <input type="text" placeholder='Your Text' />
                  <button>Add</button>
                </form>
                <button onClick={() => filterCheck()}>filter</button>
              </div>
                  {
                    load ? <div className="loadBody">
                      <h2>Loading components...</h2>
                      <div className="loadContent">
                        <div className="ring1"></div>
                        <div className="ring2"></div>
                        <div className="ring3"></div>
                        <div className="ring4"></div>
                        <div className="ring5"></div>
                        <div className="ring6"></div>
                        <div className="ring7"></div>
                        <div className="ring8"></div>
                      </div>
                    </div> :
                        data.map(todo => <AboutItem 
                          key={todo.id}
                          completed={todo.completed}
                          isCheck={todo.isCheck}
                          id={todo.id}
                          title={todo.title}
                          checked={checked}
                          delItem={delItem}
                          toggleCompleted={toggleCompleted}
                          />)
                  }
          </div>  
        </>
    );
}

export default About;
