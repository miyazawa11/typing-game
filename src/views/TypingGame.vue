<script setup>
import {ref,watch} from "vue"

// const question=[
//     {id:0,que:"asita"},
//     {id:1,que:"kyou"},
//     {id:2,que:"kinou"},
//     {id:3,que:"kinou"},
//     {id:4,que:"kinou"},
//     {id:5,que:"kinou"},
//     {id:6,que:"kinou"},
//     {id:7,que:"kinou"},
//     {id:8,que:"kinou"},
//     {id:9,que:"kinou"},
// ]
// let questionNow=ref(question[0])

//joke api
const general =()=>{
    const url="https://official-joke-api.appspot.com/jokes/random"
    fetch(url)
.then(response => {
    return response.json();
})
.then(data => {
    questionNow.value=data
    console.log(data);
})
.catch(e => {
    console.log(e);
});
}
let questionNow=ref("")
general()

const ans=ref("")
watch(ans, () => {
    // console.log("AA")
    // console.log((questionNow.value.id))
    if (ans.value == questionNow.value.setup) {
        general()
        ans.value=""
    }
});

</script>
<template>
    <div>
        <div>
            <h3>問題</h3>
            <p>{{ questionNow.setup }}</p>
            <textarea class="" v-model="ans" rows="5"></textarea>
        </div>
    </div>
</template>
