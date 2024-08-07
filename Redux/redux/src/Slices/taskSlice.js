// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     tasksList: [],
//     selectedTask:{},
// }



// const tasksSlice = createSlice({
//     name: 'tasksSlice',
//     initialState,
//     reducers: {
//         addTaskToList:(state,action) => {
//             const id = Math.random() * 100
//             let task = {...action.payload,id}
//             state.tasksList.push(task)
//         },
//         removeTaskFromList:(state,action) => {
//             state.tasksList = state.tasksList.filter((task) => task.id !== action.payload.id)
//         },
//         UpdateTaskInList:(state,action) => {
//             state.tasksList = state.tasksList.map((task) => task.id === action.payload.id ? action.payload : task)
//         },
//         setSelectedTask:(state,action) => {
//             state.selectedTask = action.payload
//         }
//     }

// })

// export const {addTaskToList,removeTaskFromList,UpdateTaskInList,setSelectedTask} = tasksSlice.actions

// export default tasksSlice.reducer




//              HTTP - GET


// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// const initialState = {
//     tasksList: [],
//     selectedTask:{},
//     isLoading:false,
//     error:''
// }

// //        HTTP -   GET

// export const getTasksFromServer = createAsyncThunk(
//     "tasks/getTasksFromServer",
//     async (_, {rejectWithValue}) => {
//         const response  = await fetch('http://localhost:8000/tasks')
//         if(response.ok) {
//             const jsonResponse = response.json()
//             return jsonResponse
//         } else {
//             return rejectWithValue({error: 'No tasks found'})
//         }
//     }
// )


// const tasksSlice = createSlice({
//     name: 'tasksSlice',
//     initialState,
//     reducers: {
//         addTaskToList:(state,action) => {
//             const id = Math.random() * 100
//             let task = {...action.payload,id}
//             state.tasksList.push(task)
//         },
//         removeTaskFromList:(state,action) => {
//             state.tasksList = state.tasksList.filter((task) => task.id !== action.payload.id)
//         },
//         UpdateTaskInList:(state,action) => {
//             state.tasksList = state.tasksList.map((task) => task.id === action.payload.id ? action.payload : task)
//         },
//         setSelectedTask:(state,action) => {
//             state.selectedTask = action.payload
//         }
//     },
//     extraReducers:(builder) => {
//         builder
//             .addCase(getTasksFromServer.pending,(state) => {
//                 state.isLoading = true
//             })
//             .addCase(getTasksFromServer.fulfilled,(state,action) => {
//                 state.isLoading = false
//                 state.error = ''
//                 state.tasksList = action.payload
//             })
//             .addCase(getTasksFromServer.rejected,(state,action) => {
//                 state.error = action.payload.error
//                 state.isLoading = false
//                 state.tasksList = []
//             })
//     }

// })

// export const {addTaskToList,removeTaskFromList,UpdateTaskInList,setSelectedTask} = tasksSlice.actions

// export default tasksSlice.reducer



//                  HTTP - POST
// import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//     tasksList:[],
//     selectedTask:{},
//     isLoading:false,
//     error:''
// }

// const BASE_URL = 'http://localhost:8000/tasks'

// //GET
// export const getTasksFromServer = createAsyncThunk(
//     "tasks/getTasksFromServer",
//     async (_,{rejectWithValue}) => {
//         const response = await fetch(BASE_URL)
//         if (response.ok) {
//             const jsonResponse = await response.json()
//             return jsonResponse
//         } else {
//             return rejectWithValue({error:'No Tasks Found'})
//         }
//     }
// )

// //POST 
// export const postTaskToServer = createAsyncThunk(
//     "tasks/postTaskToServer",
//     async (task,{rejectWithValue}) => {
//         const options = {
//             method:'POST',
//             body: JSON.stringify(task),
//             headers: {
//                 "Content-type":"application/json; charset=UTF-8"
//             }
//         }
//         const response = await fetch(BASE_URL,options)
//         if (response.ok) {
//             const jsonResponse = await response.json()
//             return jsonResponse
//         } else {
//             return rejectWithValue({error:'Task Not Added'})
//         }
//     }
// )


// const tasksSlice = createSlice({
//     name:'tasksSlice',
//     initialState,
//     reducers: {
//         addTaskToList:(state,action) => {
//             const id = Math.random() * 100
//             let task = {...action.payload,id}
//             state.tasksList.push(task)
//         },
//         removeTaskFromList:(state,action) => {
//             state.tasksList = state.tasksList.filter((task) => task.id !== action.payload.id)
//         },
//         updateTaskInList:(state,action) => {
//             state.tasksList = state.tasksList.map((task) => task.id === action.payload.id ? action.payload : task )
//         },
//         setSelectedTask:(state,action) => {
//             state.selectedTask = action.payload
//         }

//     },
//     extraReducers:(builder) => {
//         builder
//             .addCase(getTasksFromServer.pending,(state) => {
//                 state.isLoading = true
//             })
//             .addCase(getTasksFromServer.fulfilled,(state,action) => {
//                 state.isLoading = false
//                 state.error = ''
//                 state.tasksList = action.payload
//             })
//             .addCase(getTasksFromServer.rejected,(state,action) => {
//                 state.error = action.payload.error
//                 state.isLoading = false
//                 state.tasksList = []
//             })
//             .addCase(postTaskToServer.pending,(state) => {
//                 state.isLoading = true
//             })
//             .addCase(postTaskToServer.fulfilled,(state,action) => {
//                 state.isLoading = false
//                 state.error = ''
//                 state.tasksList.push(action.payload)
//             })
//             .addCase(postTaskToServer.rejected,(state,action) => {
//                 state.error = action.payload.error
//                 state.isLoading = false
//             })
//     }

// })

// export const {addTaskToList,removeTaskFromList,UpdateTaskInList,setSelectedTask} = tasksSlice.actions

// export default tasksSlice.reducer



// //                                  HTTP - PATCH
// import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//     tasksList:[],
//     selectedTask:{},
//     isLoading:false,
//     error:''
// }

// const BASE_URL = 'http://localhost:8000/tasks'

// //GET
// export const getTasksFromServer = createAsyncThunk(
//     "tasks/getTasksFromServer",
//     async (_,{rejectWithValue}) => {
//         const response = await fetch(BASE_URL)
//         if (response.ok) {
//             const jsonResponse = await response.json()
//             return jsonResponse
//         } else {
//             return rejectWithValue({error:'No Tasks Found'})
//         }
//     }
// )

// //POST 
// export const postTaskToServer = createAsyncThunk(
//     "tasks/postTaskToServer",
//     async (task,{rejectWithValue}) => {
//         const options = {
//             method:'POST',
//             body: JSON.stringify(task),
//             headers: {
//                 "Content-type":"application/json; charset=UTF-8"
//             }
//         }
//         const response = await fetch(BASE_URL,options)
//         if (response.ok) {
//             const jsonResponse = await response.json()
//             return jsonResponse
//         } else {
//             return rejectWithValue({error:'Task Not Added'})
//         }
//     }
// )

// //PATCH 
// export const updateTaskInServer = createAsyncThunk(
//     "tasks/updateTaskInServer",
//     async (task,{rejectWithValue}) => {
//         const options = {
//             method:'PATCH',
//             body: JSON.stringify(task),
//             headers: {
//                 "Content-type":"application/json; charset=UTF-8"
//             }
//         }
//         const response = await fetch(BASE_URL + '/' + task.id,options)
//         if (response.ok) {
//             const jsonResponse = await response.json()
//             return jsonResponse
//         } else {
//             return rejectWithValue({error:'Task Not Updated'})
//         }
//     }
// )

// const tasksSlice = createSlice({
//     name:'tasksSlice',
//     initialState,
//     reducers: {
//         addTaskToList:(state,action) => {
//             const id = Math.random() * 100
//             let task = {...action.payload,id}
//             state.tasksList.push(task)
//         },
//         removeTaskFromList:(state,action) => {
//             state.tasksList = state.tasksList.filter((task) => task.id !== action.payload.id)
//         },
//         updateTaskInList:(state,action) => {
//             state.tasksList = state.tasksList.map((task) => task.id === action.payload.id ? action.payload : task )
//         },
//         setSelectedTask:(state,action) => {
//             state.selectedTask = action.payload
//         }

//     },
//     extraReducers:(builder) => {
//         builder
//             .addCase(getTasksFromServer.pending,(state) => {
//                 state.isLoading = true
//             })
//             .addCase(getTasksFromServer.fulfilled,(state,action) => {
//                 state.isLoading = false
//                 state.error = ''
//                 state.tasksList = action.payload
//             })
//             .addCase(getTasksFromServer.rejected,(state,action) => {
//                 state.error = action.payload.error
//                 state.isLoading = false
//                 state.tasksList = []
//             })
//             .addCase(postTaskToServer.pending,(state) => {
//                 state.isLoading = true
//             })
//             .addCase(postTaskToServer.fulfilled,(state,action) => {
//                 state.isLoading = false
//                 state.error = ''
//                 state.tasksList.push(action.payload)
//             })
//             .addCase(postTaskToServer.rejected,(state,action) => {
//                 state.error = action.payload.error
//                 state.isLoading = false
//             })
//             .addCase(updateTaskInServer.pending,(state) => {
//                 state.isLoading = true
//             })
//             .addCase(updateTaskInServer.fulfilled,(state,action) => {
//                 state.isLoading = false
//                 state.error = ''
//                 state.tasksList = state.tasksList.map((task) => task.id === action.payload.id ? action.payload : task )
//             })
//             .addCase(updateTaskInServer.rejected,(state,action) => {
//                 state.error = action.payload.error
//                 state.isLoading = false
//             })
//     }

// })

// export const {addTaskToList,removeTaskFromList,updateTaskInList,setSelectedTask} = tasksSlice.actions

// export default tasksSlice.reducer




                //  HTTP - DELETE
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    tasksList:[],
    selectedTask:{},
    isLoading:false,
    error:''
}

const BASE_URL = 'http://localhost:8000/tasks'

//GET
export const getTasksFromServer = createAsyncThunk(
    "tasks/getTasksFromServer",
    async (_,{rejectWithValue}) => {
        const response = await fetch(BASE_URL)
        if (response.ok) {
            const jsonResponse = await response.json()
            return jsonResponse
        } else {
            return rejectWithValue({error:'No Tasks Found'})
        }
    }
)

//POST 
export const postTaskToServer = createAsyncThunk(
    "tasks/postTaskToServer",
    async (task,{rejectWithValue}) => {
        const options = {
            method:'POST',
            body: JSON.stringify(task),
            headers: {
                "Content-type":"application/json; charset=UTF-8"
            }
        }
        const response = await fetch(BASE_URL,options)
        if (response.ok) {
            const jsonResponse = await response.json()
            return jsonResponse
        } else {
            return rejectWithValue({error:'Task Not Added'})
        }
    }
)

//PATCH 
export const updateTaskInServer = createAsyncThunk(
    "tasks/updateTaskInServer",
    async (task,{rejectWithValue}) => {
        const options = {
            method:'PATCH',
            body: JSON.stringify(task),
            headers: {
                "Content-type":"application/json; charset=UTF-8"
            }
        }
        const response = await fetch(BASE_URL + '/' + task.id,options)
        if (response.ok) {
            const jsonResponse = await response.json()
            return jsonResponse
        } else {
            return rejectWithValue({error:'Task Not Updated'})
        }
    }
)
                //DELETE
export const deleteTaskFromServer = createAsyncThunk(
    "tasks/deleteTaskFromServer",
    async (task,{rejectWithValue}) => {
        const options = {
            method:'DELETE',
        }
        const response = await fetch(BASE_URL + '/' + task.id,options)
        if (response.ok) {
            const jsonResponse = await response.json()
            return jsonResponse
        } else {
            return rejectWithValue({error:'Task Not Deleted'})
        }
    }
)

const tasksSlice = createSlice({
    name:'tasksSlice',
    initialState,
    reducers: {
        addTaskToList:(state,action) => {
            const id = Math.random() * 100
            let task = {...action.payload,id}
            state.tasksList.push(task)
        },
        removeTaskFromList:(state,action) => {
            state.tasksList = state.tasksList.filter((task) => task.id !== action.payload.id)
        },
        updateTaskInList:(state,action) => {
            state.tasksList = state.tasksList.map((task) => task.id === action.payload.id ? action.payload : task )
        },
        setSelectedTask:(state,action) => {
            state.selectedTask = action.payload
        }

    },
    extraReducers:(builder) => {
        builder
            .addCase(getTasksFromServer.pending,(state) => {
                state.isLoading = true
            })
            .addCase(getTasksFromServer.fulfilled,(state,action) => {
                state.isLoading = false
                state.error = ''
                state.tasksList = action.payload
            })
            .addCase(getTasksFromServer.rejected,(state,action) => {
                state.error = action.payload.error
                state.isLoading = false
                state.tasksList = []
            })
            .addCase(postTaskToServer.pending,(state) => {
                state.isLoading = true
            })
            .addCase(postTaskToServer.fulfilled,(state,action) => {
                state.isLoading = false
                state.error = ''
                state.tasksList.push(action.payload)
            })
            .addCase(postTaskToServer.rejected,(state,action) => {
                state.error = action.payload.error
                state.isLoading = false
            })
            .addCase(updateTaskInServer.pending,(state) => {
                state.isLoading = true
            })
            .addCase(updateTaskInServer.fulfilled,(state,action) => {
                state.isLoading = false
                state.error = ''
                state.tasksList = state.tasksList.map((task) => task.id === action.payload.id ? action.payload : task )
            })
            .addCase(updateTaskInServer.rejected,(state,action) => {
                state.error = action.payload.error
                state.isLoading = false
            })
            .addCase(deleteTaskFromServer.pending,(state) => {
                state.isLoading = true
            })
            .addCase(deleteTaskFromServer.fulfilled,(state,action) => {
                state.isLoading = false
                state.error = ''
                state.tasksList = state.tasksList.map((task) => task.id === action.payload.id ? action.payload : task )
            })
            .addCase(deleteTaskFromServer.rejected,(state,action) => {
                state.error = action.payload.error
                state.isLoading = false
            })
    }

})

export const {addTaskToList,removeTaskFromList,updateTaskInList,setSelectedTask} = tasksSlice.actions

export default tasksSlice.reducer