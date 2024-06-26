// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('enviar_chave_de_acesso', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('enviar_chave_de_acesso', async function() {
    // Test name: enviar_chave_de_acesso
    // Step # | name | target | value
    // 1 | open | http://127.0.0.1:5500/App/Homepage/homepage.html | 
    await driver.get("http://127.0.0.1:5500/App/Homepage/homepage.html")
    // 2 | setWindowSize | 1552x832 | 
    await driver.manage().window().setRect({ width: 1552, height: 832 })
    // 3 | click | css=.overlap-3 | 
    await driver.findElement(By.css(".overlap-3")).click()
    // 4 | click | css=.partilhar-button | 
    await driver.findElement(By.css(".partilhar-button")).click()
    // 5 | click | css=.partilhar-button-2 | 
    await driver.findElement(By.css(".partilhar-button-2")).click()
    // 6 | click | css=.ellipse:nth-child(1) | 
    await driver.findElement(By.css(".ellipse:nth-child(1)")).click()
    // 7 | click | id=overlay | 
    await driver.findElement(By.id("overlay")).click()
    // 8 | click | css=.partilhar-button | 
    await driver.findElement(By.css(".partilhar-button")).click()
    // 9 | click | css=.partilhar-button-2 | 
    await driver.findElement(By.css(".partilhar-button-2")).click()
    // 10 | click | css=.div > .img | 
    await driver.findElement(By.css(".div > .img")).click()
    // 11 | click | css=.partilhar-button | 
    await driver.findElement(By.css(".partilhar-button")).click()
    // 12 | click | css=.partilhar-button-2 | 
    await driver.findElement(By.css(".partilhar-button-2")).click()
    // 13 | click | css=.perfil-2 > .img | 
    await driver.findElement(By.css(".perfil-2 > .img")).click()
    // 14 | click | css=.partilhar-button | 
    await driver.findElement(By.css(".partilhar-button")).click()
    // 15 | click | css=.partilhar-button-2 | 
    await driver.findElement(By.css(".partilhar-button-2")).click()
    // 16 | click | css=.perfil-3 > .img | 
    await driver.findElement(By.css(".perfil-3 > .img")).click()
    // 17 | click | id=overlay | 
    await driver.findElement(By.id("overlay")).click()
    // 18 | click | css=.frame-5 | 
    await driver.findElement(By.css(".frame-5")).click()
    // 19 | click | css=.image-4 | 
    await driver.findElement(By.css(".image-4")).click()
    // 20 | click | css=.partilhar-button | 
    await driver.findElement(By.css(".partilhar-button")).click()
    // 21 | click | css=.partilhar-button-2 | 
    await driver.findElement(By.css(".partilhar-button-2")).click()
    // 22 | click | css=.ellipse:nth-child(1) | 
    await driver.findElement(By.css(".ellipse:nth-child(1)")).click()
    // 23 | click | id=overlay | 
    await driver.findElement(By.id("overlay")).click()
    // 24 | click | css=.partilhar-button | 
    await driver.findElement(By.css(".partilhar-button")).click()
    // 25 | click | css=.partilhar-button-2 | 
    await driver.findElement(By.css(".partilhar-button-2")).click()
    // 26 | click | css=.div:nth-child(3) | 
    await driver.findElement(By.css(".div:nth-child(3)")).click()
    // 27 | click | css=.div > .img | 
    await driver.findElement(By.css(".div > .img")).click()
    // 28 | click | id=overlay | 
    await driver.findElement(By.id("overlay")).click()
    // 29 | click | css=.partilhar-button | 
    await driver.findElement(By.css(".partilhar-button")).click()
    // 30 | click | css=.partilhar-button-2 | 
    await driver.findElement(By.css(".partilhar-button-2")).click()
    // 31 | click | css=.perfil-2 > .img | 
    await driver.findElement(By.css(".perfil-2 > .img")).click()
    // 32 | click | css=.overlap .rectangle | 
    await driver.findElement(By.css(".overlap .rectangle")).click()
    // 33 | click | css=.partilhar-button | 
    await driver.findElement(By.css(".partilhar-button")).click()
    // 34 | click | css=.partilhar-button-2 | 
    await driver.findElement(By.css(".partilhar-button-2")).click()
    // 35 | click | css=.perfil-3 > .img | 
    await driver.findElement(By.css(".perfil-3 > .img")).click()
    // 36 | click | css=.overlap .rectangle | 
    await driver.findElement(By.css(".overlap .rectangle")).click()
    // 37 | click | css=.frame-5 | 
    await driver.findElement(By.css(".frame-5")).click()
  })
})
