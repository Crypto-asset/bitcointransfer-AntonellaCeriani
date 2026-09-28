/* ==========================================
Digital Wallet Demo
Transfer Simulation
========================================== */

/* ==========================================
Background Particles
========================================== */

const particleContainer =
document.querySelector("#particles");

if (particleContainer) {

const particleCount = 45;

for (let i = 0; i < particleCount; i++) {

    const particle =
        document.createElement("div");

    particle.className = "particle";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (5 + Math.random() * 10) + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    particle.style.opacity =
        0.15 + Math.random() * 0.5;

    particleContainer.appendChild(particle);
}


}

/* ==========================================
Toast
========================================== */

const toast =
document.querySelector("#toast");

function showToast(message) {

if (!toast) return;

toast.textContent = message;

toast.classList.add("show");

setTimeout(() => {
    toast.classList.remove("show");
}, 2500);


}

/* ==========================================
Copy Wallet Address
========================================== */

const copyButton =
document.querySelector("#copyWallet");

const walletAddress =
document.querySelector("#walletAddress");

if (copyButton && walletAddress) {

copyButton.addEventListener(
    "click",
    async () => {

        const address =
            walletAddress.textContent.trim();

        try {

            await navigator.clipboard.writeText(
                address
            );

            copyButton.textContent =
                "Copied ✓";

            showToast(
                "Wallet address copied"
            );

            setTimeout(() => {

                copyButton.textContent =
                    "Copy Address";

            }, 2000);

        } catch (error) {

            showToast(
                "Copy failed"
            );

        }

    }
);


}

/* ==========================================
Transfer Form
========================================== */

const transferForm =
document.querySelector("#transferForm");

const destinationWallet =
document.querySelector("#destinationWallet");

if (transferForm) {

transferForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

        const wallet =
            destinationWallet.value.trim();


        if (!wallet) {

            destinationWallet.focus();

            return;

        }


        /*
            Demonstration only.

            The entered address is not sent
            anywhere and is not validated.

            The simulation proceeds to the
            demonstration blocked page.
        */

        window.location.href =
            "blocked.html";

    }
);


}

/* ==========================================
Page Loaded
========================================== */

window.addEventListener(
"load",
() => {

    document.body.classList.add("ready");

}


);
