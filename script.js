// CONFIGURATION
const targetDate = new Date("Jan 1, 2026 00:00:00").getTime();

const wishes = [
  "To the person who makes every day feel like a celebration. ❤️",
  "May the coming year bring you endless reasons to smile.",
  "I’m grateful for every moment we’ve shared and excited for what’s next.",
  "Here’s to more laughter, love, and late-night talks.",
  "You make ordinary days feel extraordinary.",
  "New year, same us, growing stronger together.",
  "Thank you for being my constant in every season.",
  "May all your dreams find their way to reality this year.",
  "Every year feels brighter with you by my side.",
  "Cheers to more memories we haven’t made yet. 🥂",
  "You are my favorite chapter in every year.",
  "I hope this year gives you everything you’ve been wishing for.",
  "Life feels kinder when I share it with you.",
  "Another year, another reason to choose you.",
  "You turn small moments into beautiful memories.",
  "May love and happiness follow you everywhere this year.",
  "I’m excited to see how far we’ll go together.",
  "You are my today, tomorrow, and always.",
  "Here’s to growth, peace, and shared dreams.",
  "Thank you for making my world feel like home.",
  "This year, may your heart feel lighter and fuller.",
  "You are the best part of every plan I make.",
  "Let’s make this year unforgettable together.",
  "I’m thankful for you today and every day ahead.",
  "May this year reward your kindness and patience.",
  "With you, every year feels brand new.",
  "You are my favorite reason to smile.",
  "Here’s to love that grows deeper with time.",
  "I can’t wait to see what this year has in store for us.",
  "You make life feel beautifully simple.",
  "Another year of choosing us, every single day.",
  "May success, peace, and love find you effortlessly.",
  "You’re the calm in my chaos and the joy in my days.",
  "This year, may happiness find you easily.",
  "Thank you for loving me the way you do.",
  "I look forward to every sunrise we’ll share.",
  "Here’s to more shared dreams and quiet moments.",
  "You are my favorite place to be.",
  "May the year ahead be gentle and generous to you.",
  "Every memory with you is worth keeping.",
  "You make the future feel exciting.",
  "I hope this year brings you closer to everything you want.",
  "With you, even time slows down.",
  "Another year, another reason to be grateful for you.",
  "You are my forever kind of happiness.",
  "May love guide you through every challenge.",
  "Here’s to us and everything we’re becoming.",
  "You are the highlight of every year.",
  "I’m proud of the journey we’re on together.",
  "May this year bring you peace of mind and heart.",
  "You make every year feel meaningful.",
  "Here’s to late nights, long talks, and endless love.",
  "You are my favorite part of every plan.",
  "May this year surprise you in the best ways.",
  "Life feels warmer with you around.",
  "Another year of loving you feels just right.",
  "You are the wish I didn’t know I needed.",
  "May joy find you in the smallest moments.",
  "You are my safe place, always.",
  "Here’s to another year of us growing together.",
  "You make every goodbye easier and every hello special.",
  "May this year treat you as beautifully as you deserve.",
  "With you, the future feels brighter.",
  "You are the reason I believe in good things.",
  "Here’s to love that feels easy and real.",
  "Every year with you is a gift.",
  "May happiness follow you wherever you go.",
  "You are my favorite kind of forever.",
  "Another year of loving you sounds perfect.",
  "You make life feel balanced and beautiful.",
  "May this year bring clarity and confidence.",
  "You are my constant through every change.",
  "Here’s to shared smiles and quiet victories.",
  "You make every year worth celebrating.",
  "May your heart be light and your days be kind.",
  "You are my favorite thought at the start of every year.",
  "Another year, same love, deeper connection.",
  "You make the future feel safe and exciting.",
  "May this year reward your hard work and dreams.",
  "You are the best part of my every year.",
  "Here’s to love that only grows stronger.",
  "You make time feel well spent.",
  "May the year ahead be filled with warmth and joy.",
  "You are my always and forever.",
  "Another year of memories waiting to be made.",
  "You make every moment feel meaningful.",
  "Here’s to a year filled with love, laughter, and us. ❤️",
  "Every heartbeat of mine knows your name. ❤️",
  "Loving you feels like coming home every single day.",
  "You are my quiet miracle in a noisy world.",
  "If I had one wish this year, it would still be you.",
  "My favorite place will always be right next to you.",
  "You make love feel easy, warm, and real.",
  "Every year with you feels like a beautiful promise.",
  "You are the reason my heart believes in forever.",
  "I don’t need a perfect year, just you in it.",
  "Your love is my safest shelter.",
  "I fell for you again… and I probably will tomorrow.",
  "You make even silence feel romantic.",
  "My heart chose you long before my mind understood.",
  "Loving you is my favorite habit.",
  "You are the dream I never want to wake up from.",
  "With you, time slows and love deepens.",
  "You are my always, in every lifetime.",
  "Your smile still gives me butterflies.",
  "I want every version of the future if you’re in it.",
  "You are my favorite love story.",
  "Your love feels like magic I get to keep.",
  "I’ll choose you, today and every year after.",
  "You make forever feel achievable.",
  "My heart feels lighter when you’re near.",
  "You are my most beautiful constant."

];


const timerElement = document.getElementById("timer");

// TIMER LOGIC
function updateTimer() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
        revealSurprise();
        return;
    }

    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    timerElement.innerText = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// THE BIG REVEAL
function revealSurprise() {
    clearInterval(timerInterval);
    document.getElementById("countdown-screen").classList.add("hidden");
    document.getElementById("surprise-screen").classList.remove("hidden");
    
    getNewWish(); // Load first wish
    launchConfetti();
}

// WISH GENERATOR
function getNewWish() {
    const display = document.getElementById("wish-display");
    display.style.opacity = 0;
    
    setTimeout(() => {
        const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
        display.innerText = `"${randomWish}"`;
        display.style.opacity = 1;
    }, 300);
}

// CONFETTI ANIMATION
function launchConfetti() {
    const end = Date.now() + (10 * 1000); // 10 seconds of fireworks
    const colors = ['#d4af37', '#ffffff', '#f4f4f4'];

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();
