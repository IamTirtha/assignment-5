//To filter total , open and closed based on HIGH, Medium an LOW condition
let allIssues = [];

const showAll = () => {
    displayAllIssues(allIssues);

    document.getElementById("issue-count").innerText =
        `Total - ${allIssues.length}`;
    };

    const showOpen = () => {
    const openIssues = allIssues.filter(issue =>
        issue.status === "open"
    );

    displayAllIssues(openIssues);

    document.getElementById("issue-count").innerText =
        `Open - ${openIssues.length}`;
    };

    const showClosed = () => {
    const closedIssues = allIssues.filter(issue =>
        issue.status === "closed"
    );

    displayAllIssues(closedIssues);

    document.getElementById("issue-count").innerText =
        `Closed - ${closedIssues.length}`;
};

document.getElementById("all-btn").addEventListener("click", showAll);
document.getElementById("open-btn").addEventListener("click", showOpen);
document.getElementById("closed-btn").addEventListener("click", showClosed);


