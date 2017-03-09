/**
 * Created by zhaochenchen on 2017/3/8.
 */
const initState={
    ListDetails:[
        {
            url:'http://p4.music.126.net/Ohm58HJ1VxiGgcPGxMabaQ==/3430476279894539.jpg?param=200y200',
            title:'我喜欢的音乐',
            lists:[
                {
                    title:'Dont\' look back in anger',
                    duration:'05:38',
                    songId:0
                },
                {
                    title:'Stand by me',
                    duration:'05:56',
                    songId:1
                },
            ]
        }
    ]
}

const ListInfos=(state=initState,action)=>{
    return state
}
export default ListInfos