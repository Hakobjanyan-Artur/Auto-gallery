import React, {useReducer} from "react"
import './chat.css'
const reducer = (state, action) => {
    switch (action.type) {
        case 'toggle-txt':
            return {
                ...state,
                txt: action.paylod
            }
        case 'reset-txt':
            return {
                ...state,
                txt: ''
            }
        case 'add-new-mes':
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                    id: new Date().getTime().toString(),
                    txt: state.txt,
                    completed: false,
                    user: state.user ? 'Me' : 'You'
                }
                ],
                user: !state.user
            }
        case 'del-mes':
            return {
                ...state,
                messages: [
                    ...state.messages.filter(el => el.id !== action.paylod)
                ]
            }
        case 'set-edit-id':
            return {
                ...state,
                editId: action.paylod.id,
                txt: action.paylod.txt
            }    
        case 'edit-mes':
            return {
                ...state,
                messages: [
                    ...state.messages.map(mess => {
                        if (mess.id === state.editId) {
                            return {
                                ...mess,
                                txt: state.txt
                            }
                        }
                        return mess
                    })
                ]
            }
        case 'sun' :
            return {
                ...state,
                sun: !state.sun
            }                    
        default:
            return state    
    }
}
const initialState = {
    txt: '',
    messages: [],
    user: true,
    editId: '',
    sun: false
}
function Chat () {
    const [state, dispatch] = useReducer(reducer, initialState)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!state.editId) {
            dispatch({
                type: 'add-new-mes'
            })
            dispatch({
                type: 'reset-txt'
            })
        }else {
            dispatch({
                type: 'edit-mes'
            })
        }
    }
    return (
        <div className="chatBody">
            <div 
            style={{
                background: state.sun ? 'darkgray' : '#222224',
                boxShadow: state.sun ? '0 0 25px #000' : '0 0 25px rgba(32, 65, 250, 0.514)' 
            }}
            className="chatInterface">
                <div className="title">
                    <h1 
                    style={{
                    color: state.sun ? '#222224' : '#fff' 
                }}
                    >My Chat</h1>
                    <div className="sun" onClick={() => dispatch({type: 'sun'})}>
                    <i
                    style={{
                        transform: state.sun ? 'translateY(0)' : 'translateY(-25px)',
                    }}
                     class="fa-solid fa-moon"></i>
                        <i
                        style={{
                            transform: state.sun ? 'translateY(-25px)' : 'translateY(0)',
                            textShadow: state.sun ? '' : '0 0 5px yellow'
                            }} 
                        class="fa-solid fa-sun">

                        </i>
                    </div>
                </div>
                <hr />
                <div className="desctop"
                
                >
                    {
                        state.messages.map(mes => (
                            <div className="mes" key={mes.id}
                            style={{
                                background: mes.user === 'Me' ? '#333' : '#555',
                                marginLeft: mes.user === 'Me' ? '42%' : '0',
                                borderBottomLeftRadius: '20px',
                                borderBottomRightRadius: '20px',
                                borderTopLeftRadius: mes.user === 'Me' ? '20px' : 'none',
                                borderTopRightRadius: mes.user === 'Me' ? 'none' : '20px',
                            }}
                            >
                                <div className="user">{mes.user}
                                <button
                                onClick={() => dispatch({type:'del-mes', paylod: mes.id})}
                                style={{
                                    left: mes.user === 'Me' ? '-15px' : '200px',
                                    color: state.sun ? '#000' : ''
                                }}
                                ><ion-icon name="trash-outline"></ion-icon></button>
                                </div>
                                <button
                                style={{
                                    left: mes.user === 'Me' ? '-15px' : '200px',
                                    top: '30px',
                                    color: state.sun ? '#000' : ''
                                }}
                                onClick={() => dispatch({type: 'set-edit-id', paylod: {id: mes.id, txt: mes.txt}})}
                                ><i class="fa-solid fa-pen-to-square"></i></button>
                                <div className="mesTxt">{mes.txt}</div>
                            </div>
                        ))
                    }
                </div>
                <hr />
                <div className="forms">
                    <form onSubmit={handleSubmit}>
                        <input
                        value={state.txt}
                        onChange={(e) => dispatch({type: 'toggle-txt', paylod: e.target.value})} 
                        className="sendInput" 
                        type="text"
                        placeholder="Enter message"
                        style={{
                            background: state.sun ? '#222224' : '#fff',
                            color: state.sun ? '#fff' : '#222224' 
                        }}
                        />
                        <button
                        style={{
                            color: state.sun ? '#222224' : 'rgba(32, 65, 250, 0.514)' 
                        }}
                        ><i class="fa-solid fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Chat