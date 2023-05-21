export function getAllDogs() {
   const url="/dogs";
   const headers={"Content-Type": "text"}
   
   const options={
    method:"GET",
    headers:headers,
   };
   return fetch(url)
}

export function getDogNumberTwo() {
    const url="/dogs/2";
    const headers={"Content-Type": "text"}
    
    const options={
     method:"GET",
     headers:headers,
    };
    return fetch(url)
}

export function postNewDog() {
    const url="/dogs";
    const headers={"Content-Type": "application/x-www-form-urlencoded"}
    const bodyparams=new URLSearchParams({
        name:"Rony",
        age:5
    })
    const options={
     method:"POST",
     headers:headers,
     body:bodyparams
    };
    return fetch(url,options)
}

export function postNewDogV2(name, age) {
    const url="/dogs";
    const headers={"Content-Type": "application/x-www-form-urlencoded"}
    const body=new URLSearchParams({
        name:name,
        age:age
    })
    const options={
     method:"POST",
     headers:headers,
     body:body
    };
    return fetch(url,options)
}

export function deleteDog(id) {
    const headers={AUTH: "ckyut5wau0000jyv5bsrud90y"}
    const url=`/dogs/${id}/delete`
    const options={
     method:"POST",
     headers:headers,
     body:""
    };
    return fetch(url,options)
}