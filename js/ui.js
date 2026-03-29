// display korbo
const displayAllIssues = (issues) => {
    const emptyContainer = document.getElementById("issue-container");
    emptyContainer.innerHTML = "";
    issues.forEach((issue) => {
        const card = document.createElement("div");
        card.innerHTML = `
                    <div class="bg-white rounded-xl shadow-md p-4 w-[300px]">
            <!-- Top Section -->
            <div class="flex justify-between items-start mb-2">
                <!-- Status Dot -->
                <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>

                <!-- Priority -->
                <span
                class="bg-red-100 text-red-500 text-xs px-2 py-1 rounded-full font-medium"
                >
                ${issue.priority}
                </span>
            </div>

            <!-- Title -->
            <h2 class="text-sm font-semibold text-gray-800 mb-1">
                ${issue.title}
            </h2>

            <!-- Description -->
            <p class="text-xs text-gray-500 mb-3">
                ${issue.description}
            </p>

            <!-- Tags -->
            <div class="flex gap-2 mb-3">
                <span
                class="bg-red-100 text-red-500 text-[10px] px-2 py-1 rounded-full font-medium"
                >
                ${issue.labels[0]}
                </span>
                <span
                class="bg-yellow-100 text-yellow-600 text-[10px] px-2 py-1 rounded-full font-medium"
                >
                ${issue.labels[1]}
                </span>
                <button onclick="loadModalData(${issue.id})"><i class="fa-solid fa-circle-info"></i></button>
            </div>

            <!-- Footer -->
            <div class="flex justify-between items-center text-[10px] text-gray-400">
                <span>${issue.author}</span>
                <span>${issue.createdAt}</span>
            </div>
            </div>
                `;
        emptyContainer.appendChild(card);
    });
};

const displayModal=(modal)=>{
    const emptyBox = document.getElementById("details-box")
    emptyBox.innerHTML=""
    const card = document.createElement("div");
    card.innerHTML=`
    <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-4">
        <!-- Title -->
        <h2 class="text-xl font-semibold text-gray-800">
            ${modal.title}
        </h2>

        <!-- Status + Meta -->
        <div class="flex items-center gap-3 text-sm text-gray-500">
            <span
            class="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium"
            >
            ${modal.status}
            </span>
            <span>• ${modal.updatedAt}</span>
        </div>

        <!-- Tags -->
        <div class="flex gap-2">
            <span
            class="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full font-medium"
            >
            ${modal.labels[0]?modal.labels[0]:"N/A"}
            </span>
            <span
            class="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full font-medium"
            >
            ${modal.labels[1]?modal.labels[1]:"N/A"}
            </span>
        </div>

        <!-- Description -->
        <p class="text-gray-600 text-sm">
            ${modal.description}
        </p>

        <!-- Assignee + Priority -->
        <div class="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
            <div>
                <p class="text-gray-500 text-sm">Assignee:</p>
                <p class="font-medium text-gray-800">${modal.assignee}</p>
            </div>

            <div class="text-right">
                <p class="text-gray-500 text-sm">Priority:</p>
                <span class="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">${modal.priority}</span>
            </div>
        </div>
    </div>

    `
    emptyBox.appendChild(card);
    document.getElementById("my_modal_5").showModal();
    
}