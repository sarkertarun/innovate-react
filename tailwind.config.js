/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       'menuFontColor': "#192239",
        'menuHoverColor': "#FF7628",
        'btnbgColor':"#FF7628",
        'servicepColor':"#6C7D93",


       'strategyColor': "#EBF7E9",
       'socialColor' : "#D8EAFF",
       'contentColor': "#FBF1EC",
        'roundBtn': "#FF7628",


        'strHeadColor':"#202427",
        'showcaseBgColor':"#F0F5FB",


        'reviewbgColor':"#FCF8F8",
        'bloghColor' :"#413F45",
        'blogBgColor' :"#F2F7FD",
        'footerBgColor':"#FEFFFF",
      },
      backgroundImage: {
        navBg: "url('assets/bg-image.png')",
        bannerBg: "url('assets/bannerBg.png')",
        servicebg: "url('assets/servicebg.png')",
        whobg: "url('assets/whobg.png')",
       
      
    },
      
      fontFamily: {
        'openSans' :["Open Sans"],
        'paprika': ["Paprika"],
        'roboto':["Roboto"],
        'work':["Work Sans"],
        'nunito':["Nunito"]
      },
      maxWidth: {
        "container": "1170px",
      },
     

    },
  },
  plugins: [],
}

