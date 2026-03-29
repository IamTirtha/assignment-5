const AllButton = document.getElementById("all-btn");
AllButton.addEventListener("click", () => {
    loadData();
});

// 1.Fetch Korbo
const loadData = () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url)
        .then((res) => res.json())
        // .then((data) => displayAllIssues(data.data));
        .then((data)=>{
            allIssues=data.data; //Ekebaare allIssue te data store korte hobe. tahole filter korar somoy already push kora thakbe. Khub guruttopurno
            displayAllIssues(allIssues); //data dekhanor jonno
            showAll()// by default api data r total sonkhya dekhanor jonno, nahole click korar age Total - 0 dekhay
        })
        .catch(err => console.log(err)) //exact error console e dekhabe
};

const loadModalData=async(id)=>{
    url=`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
        const res=await fetch(url)
        const details=await res.json()
        displayModal(details.data);
}