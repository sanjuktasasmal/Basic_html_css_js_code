 document.getElementById('comment_btn').addEventListener('click', ()=>{
    const commentBox=document.getElementById('comment_box');
    const commentBoxValue=commentBox.value;

    const commentPlace=document.getElementById('comment-place');
    const makePtag=document.createElement('p');
     makePtag.innerText=commentBoxValue;
     commentPlace.appendChild(makePtag);
     commentBox.value='';
})