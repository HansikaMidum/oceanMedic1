const translations = {
    en: {
        home: "Home",
        about: "About",
        animals: "Venomous Animals",
        firstAid: "First Aid",
        emergency: "Emergency",
        hospitals: "Hospitals",
        map: "Map",
        contact: "Contact",
        staySafe: "Stay Safe on Sri Lanka's Coastlines",
        identifyVenomous: "Identify venomous marine animals, learn first aid, and find emergency help."
    },
    si: {
        home: "මුල් පිටුව",
        about: "අප ගැන",
        animals: "විෂ සහිත සත්තු",
        firstAid: "පළමු උදව්",
        emergency: "හදිසි",
        hospitals: "රෝහල්",
        map: "සිතියම",
        contact: "සම්බන්ධ වන්න",
        staySafe: "ශ්‍රී ලංකාවේ වෙරළේ ආරක්ෂාවෙන් සිටින්න",
        identifyVenomous: "විෂ සහිත මත්ස්යයන් හඳුනා ගන්න, පළමු උදව් සහ හදිසි උපකාරය සොයන්න."
    },
    ta: {
        home: "முகப்பு",
        about: "எங்களை பற்றி",
        animals: "விஷவாயு மிருகங்கள்",
        firstAid: "முதலுதவி",
        emergency: "அவசரம்",
        hospitals: "மருத்துவமனைகள்",
        map: "வரைபடம்",
        contact: "தொடர்பு கொள்ளவும்",
        staySafe: "இலங்கையின் கடற்கரைகளில் பாதுகாப்பாக இருங்கள்",
        identifyVenomous: "விஷமுள்ள கடல் உயிர்களை அடையாளம் காணவும், முதலுதவி கற்றுக்கொள்ளவும் மற்றும் அவசர உதவியை கண்டுபிடிக்கவும்."
    }
};

document.getElementById("languageSelector").addEventListener("change", function () {
    const selectedLanguage = this.value;
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        element.innerText = translations[selectedLanguage][key];
    });
});
