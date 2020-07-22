const userData = [
    {
        id:1,
        firstName:'Oluwatobi',
        middleName:'Peter',
        lastName:'Taiwo',
        location:'Lagos, Nigeria',
        skills:['HTML','CSS','JavaScript'],
        picture:'url',
        title:'Software Engineer',
        position:'Team Lead',
        orgUnit:[
            {
                id:1,
                name:'Technology',
                parantId:0,
            },
            {
                id:2,
                name:'Software',
                parentId:1,
            },
            {
                id:3,
                name:'System Analist',
                parentId:2,
            },
        ],
        
    },
   
]

export default userData