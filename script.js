function openAboutMeSection() {
  const element = document.querySelector("#about-section")
  element.classList.add("active")
}

function CloseAboutMeSection() {
  const element = document.querySelector("#about-section")
  element.classList.remove("active")
}

const sunIcon = document.querySelector(".icon-sun")

sunIcon.addEventListener("click", () => {
  sunIcon.style.display = "none"
  const body = document.getElementById("body")
  body.style.backgroundColor = "#ffffff"
  const moonIcon = document.querySelector(".icon-moon")
  moonIcon.style.display = "block"
  const firstPortfolioImage = document.getElementsByClassName(
    "first-portfolio-image",
  )
  firstPortfolioImage[0].style.display = "none"
  const secondPortfolioImage = document.getElementsByClassName(
    "second-portfolio-image",
  )
  secondPortfolioImage[0].style.display = "block"
  const brandLogoOne = document.getElementsByClassName("brandLogoOne")
  brandLogoOne[0].style.display = "none"
  const brandLogoTwo = document.getElementsByClassName("brandLogoTwo")
  brandLogoTwo[0].style.display = "block"
  const devName = document.getElementsByClassName("dev-name")
  devName[0].style.color = "#010612"
  const devTitle = document.getElementsByClassName("dev-title")
  devTitle[0].style.color = "#010612"
  const socialIcons = document.querySelectorAll(".socialIcons")
  socialIcons.forEach((icon) => {
    icon.style.color = "black"
  })
  const githubIcons = document.querySelectorAll(".githubIcon")
  githubIcons.forEach((icon) => {
    icon.style.fill = "black"
  })
  const arrowDownBtnPath = document.querySelector(".btn-arrow-down path")
  arrowDownBtnPath.setAttribute("fill", "#010612")
  arrowDownBtnPath.setAttribute("stroke", "#010612")
  const arrowBtnPath = document.querySelector(".btn-arrow path")
  arrowBtnPath.setAttribute("fill", "#010612")
  arrowBtnPath.setAttribute("stroke", "#010612")
  const workTitle = document.querySelector(".works-title")
  workTitle.style.backgroundColor = "#ffffff"
  const connectTitle = document.querySelector(".connect-title")
  connectTitle.style.backgroundColor = "#ffffff"
  const inputFields = document.querySelectorAll(".input-field")
  inputFields.forEach((input) => {
    input.style.backgroundColor = "#ffffff"
  })
})

const moonIcon = document.querySelector(".icon-moon")

moonIcon.addEventListener("click", () => {
  moonIcon.style.display = "none"
  const body = document.getElementById("body")
  body.style.backgroundColor = "#010612"
  const sunIcon = document.querySelector(".icon-sun")
  sunIcon.style.display = "block"
  const firstPortfolioImage = document.getElementsByClassName(
    "first-portfolio-image",
  )
  firstPortfolioImage[0].style.display = "block"
  const secondPortfolioImage = document.getElementsByClassName(
    "second-portfolio-image",
  )
  secondPortfolioImage[0].style.display = "none"
  const brandLogoOne = document.getElementsByClassName("brandLogoOne")
  brandLogoOne[0].style.display = "block"
  const brandLogoTwo = document.getElementsByClassName("brandLogoTwo")
  brandLogoTwo[0].style.display = "none"
  const devName = document.getElementsByClassName("dev-name")
  devName[0].style.color = "#ffffff"
  const devTitle = document.getElementsByClassName("dev-title")
  devTitle[0].style.color = "#ffffff"
  const socialIcons = document.querySelectorAll(".socialIcons")
  socialIcons.forEach((icon) => {
    icon.style.color = "#ffffff"
  })
  const githubIcons = document.querySelectorAll(".githubIcon")
  githubIcons.forEach((icon) => {
    icon.style.fill = "#ffffff"
  })
  const arrowDownBtnPath = document.querySelector(".btn-arrow-down path")
  arrowDownBtnPath.setAttribute("fill", "#ffffff")
  arrowDownBtnPath.setAttribute("stroke", "#ffffff")
  const arrowBtnPath = document.querySelector(".btn-arrow path")
  arrowBtnPath.setAttribute("fill", "#ffffff")
  arrowBtnPath.setAttribute("stroke", "#ffffff")
  const workTitle = document.querySelector(".works-title")
  workTitle.style.backgroundColor = "#010612"
  const connectTitle = document.querySelector(".connect-title")
  connectTitle.style.backgroundColor = "#010612"
  const inputFields = document.querySelectorAll(".input-field")
  inputFields.forEach((input) => {
    input.style.backgroundColor = "#374151"
  })
})
