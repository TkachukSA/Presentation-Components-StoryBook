import {UserType} from "./10test";


function icraceAge(u: UserType){
u.age = u.age+1
}

test('referens type test',()=>{
    let user:UserType = {
        name: 'Sergey',
        age: 28,
        adress: { title:'Minsk'}
    }

    icraceAge(user)
    expect(user.age).toBe(29)


})

