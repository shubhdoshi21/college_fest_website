/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    
    },
    screens: {
      lg: { max: "1800px" },
      lgm: { max: "1140px" },
      md: { max: "990px" },
      sm: { max: "600px" },
      xs: { max: "400px" },
      minmd: "1700px",
      minlg: "2100px",
    },
    backgroundImage:{
      "home":"url('https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80')",
      about:"url('../paramarsh/src/components/2.jpg')",
      contact:"url('../paramarsh/src/components/3.jpg')",
      team:"url('../paramarsh/src/components/4.jpg')",
      event:"url('../paramarsh/src/components/5.jpg')",
    }
   
  },
  variants: {
    extend: {},
  },
  plugins: [],
};