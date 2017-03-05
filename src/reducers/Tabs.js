/**
 * Created by zhaochenchen on 2017/3/5.
 */
const initState={
    style:{
        outer:{left:0},
        inner:{width:'80%'}
    },
}
const Tabs=(state=initState,action)=>{
    switch (action.type){
        case 'recommend':
            return Object.assign({},state,{style:{
                outer:{left:0},
                inner:{width:'80%'}
            }})
        case 'list':
            return Object.assign({},state,{style:{
                outer:{left:'25%'},
                inner:{width:'40%'}
            }})
        case 'radio':
            return Object.assign({},state,{style:{
                outer:{left:'50%'},
                inner:{width:'80%'}
            }})
        case 'ranking':
            return Object.assign({},state,{style:{
                outer:{left:'75%'},
                inner:{width:'60%'}
            }})
        default:
            return state
    }
}
export default Tabs