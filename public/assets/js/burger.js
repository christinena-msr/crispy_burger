const devourIt = document.getElementsByClassName(".burger-button");
console.log(devourIt);
devourIt.addEventListener("click", () => {
    const id = document.querySelector(this).data("id");
    const devoured = document.querySelector(this).data("devoured");
    const status = {
        devoured: devoured
    };

    fetch("/api/burger/" + id, {
        method: "PUT",
        data: status
    }).then(() => {
        console.log("changed status of burger to ", devoured);
        location.reload();
    })
})