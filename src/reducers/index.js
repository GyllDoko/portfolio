const initialState = {
    work: [

        {
            name: "Expert Serpha",
            category: "Frontend/React",
            date: "11/2020",
            images: ["assets/img/expertserpha/expert-serpha1.png", "assets/img/expertserpha/expert-serpha2.png", "assets/img/expertserpha/expert-serpha3.png", "assets/img/expertserpha/expert-serpha4.png", "assets/img/expertserpha/expert-serpha5.png"],
            description: "Plateforme pour permettre à l'ordre des phamarciens de pouvoir proposer des fiches techniques de produits pharmaceutiques, de renseigner la disponibilité d'un certains médicaments dans une pharmacie et également donner des avis médicaux...",
            client: "Unir International",
            url: ""
        },
        {
            name: "Green Tech Innovation",
            category: "Frontend/React",
            date: "03/2021",
            images: ["assets/img/gti/gti1.png", "assets/img/gti/gti2.png", "assets/img/gti/gti3.png", "assets/img/gti/gti4.png", "assets/img/gti/gti5.png"],
            description: "Plateforme de présentation de la société Green Tech Innovation",
            client: "",
            url: ""
        },
        {
            name: "Gestion des Assurances (Rinel SARL)",
            category: "Frontend/React - Backend/Django",
            date: "05/2021",
            images: ["assets/img/assurance/assurance1.png", "assets/img/assurance/assurance2.png", "assets/img/assurance/assuranc3.png", "assets/img/assurance/assurance4.png", "assets/img/assurance/assurance5.png"],
            description: "Plateforme interne de gestion des validité  d'assurances, de notification de fin de période et de communiqué aux clients...  ",
            client: "RINEL SARL",
            url: ""
        },
        {
            name: "Bulk SMS Platforme (Rinel SARL)",
            category: "Frontend/React - Backend/Django",
            date: "06/2021",
            images: ["assets/img/bulk/bulk1.png", "assets/img/bulk/bulk2.png", "assets/img/bulk/bulk3.png", "assets/img/bulk/bulk4.png", "assets/img/bulk/bulk5.png",],
            description: "Plateforme d'envoi de sms par le service marketing et le reesources humaines. les groupes de contacts et les entêttes différentié",
            client: "RINEL  SARL",
            url: ""
        },
        {
            name: "Délices de Khadija (Mobile App)",
            category: "Mobile / React Native",
            date: "08/2021",
            images: ["assets/img/khadija/khadija1.jpg", "assets/img/khadija/khadija2.jpg", "assets/img/khadija/khadija3.jpg", "assets/img/khadija/khadija4.jpg", "assets/img/khadija/khadija5.jpg", "assets/img/khadija/khadija6.jpg",],
            description: "Application mobile de e-commerce",
            client: "Ets Khadija",
            android: true
        },
        {
            name: "Crypto Plus Plus Platform",
            category: "Frontend/ React",
            date: "03/2021",
            images: ["assets/img/cpp/cpp1.png", "assets/img/cpp/cpp2.png", "assets/img/cpp/cpp3.png", "assets/img/cpp/cpp4.png", "assets/img/cpp/cpp5.png",],
            description: "Plateforme d'achat et de vente de cryptomonnaie avec KYC",
            client: "Communauté CPP - Bénin",
            url: ""
        },
        {
            name: "Leading Edge",
            category: "Django/ MVC",
            date: "01/2021",
            images: ["assets/img/leading/leading1.png", "assets/img/leading/leading2.png", "assets/img/leading/leading3.png", "assets/img/leading/leading4.png", "assets/img/leading/leading5.png",],
            description: "Plateforme web de e-commerce",
            client: "Particulier",
            url: ""
        },

    ]
}
export const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}