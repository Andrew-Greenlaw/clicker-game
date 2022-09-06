let clickUpgrades = [
  {
    name: 'pointer',
    price: 50,
    quantity: 0,
    multiplier: 1
  },
  {
    name: 'goldPointer',
    price: 200,
    quantity: 0,
    multiplier: 5
  },
  {
    name: 'goldPickaxe',
    price: 500,
    quantity: 0,
    multiplier: 15
  },
  {
    name: 'diamondSword',
    price: 1250,
    quantity: 0,
    multiplier: 50
  }

];

let automaticUpgrades = [
  {
    name: 'Max',
    price: 300,
    quantity: 0,
    multiplier: 5
  },
  {
    name: 'Sleigh',
    price: 750,
    quantity: 0,
    multiplier: 100
  },
  {
    name: 'Bag',
    price: 2000,
    quantity: 0,
    multiplier: 500
  },
  {
    name: 'Grinch',
    price: 5000,
    quantity: 0,
    multiplier: 1500
  }
];

let presentCount = 0
let clickerAmount = 1
let autoClickAmount = 0


function addPresent() {
  presentCount += clickerAmount
  drawCounter()
}
function addAutoPresent() {
  presentCount += autoClickAmount
  drawCounter()
}

function drawCounter() {
  let clickCount = document.getElementById('clickCount')
  // @ts-ignore
  let count = clickCount.querySelector(`.count`)
  // console.log(count)
  // @ts-ignore
  count.innerText = `${presentCount.toFixed(0)}`
}

function buyClickUpgrade(upgradeName) {
  const selectedUpgrade = clickUpgrades.find(c => c.name == upgradeName)
  // @ts-ignore
  let clickerUpgrade = document.getElementById(`${selectedUpgrade.name}`)
  // @ts-ignore
  let updatedQuantity = clickerUpgrade.querySelector(`.${selectedUpgrade.name}-quantity`)
  // @ts-ignore
  let updatedPrice = clickerUpgrade.querySelector(`.${selectedUpgrade.name}-price`)
  // console.log(selectedUpgrade)
  // @ts-ignore
  if (selectedUpgrade.price <= presentCount) {
    // @ts-ignore
    presentCount -= selectedUpgrade.price
    // @ts-ignore
    selectedUpgrade.quantity++
    // @ts-ignore
    selectedUpgrade.price *= 1.25
    // @ts-ignore
    clickerAmount += selectedUpgrade.multiplier
    // @ts-ignore
    let multiplierAmount = selectedUpgrade.quantity * selectedUpgrade.multiplier
    // @ts-ignore
    updatedQuantity.innerHTML = `<p class="mb-1">x${selectedUpgrade.quantity}</p><p>${multiplierAmount}/click</p>`
    // @ts-ignore
    updatedPrice.innerHTML = `<p class="mb-1">COST:</p> <p>${selectedUpgrade.price.toFixed(0)}</p>`
    // console.log(selectedUpgrade.quantity)
    console.log(clickerAmount)
    drawCounter()
    drawUpgradeCounter('click')
  }
}

function buyAutomaticUpgrade(upgradeName) {
  const selectedUpgrade = automaticUpgrades.find(a => a.name == upgradeName)
  // @ts-ignore
  let autoUpgrade = document.getElementById(`${selectedUpgrade.name}`)
  // @ts-ignore
  let updatedQuantity = autoUpgrade.querySelector(`.${selectedUpgrade.name}-quantity`)
  // @ts-ignore
  let updatedPrice = autoUpgrade.querySelector(`.${selectedUpgrade.name}-price`)
  // @ts-ignore
  if (selectedUpgrade.price <= presentCount) {
    // @ts-ignore
    presentCount -= selectedUpgrade.price
    // @ts-ignore
    selectedUpgrade.quantity++
    // @ts-ignore
    selectedUpgrade.price *= 1.50
    // @ts-ignore
    // console.log(selectedUpgrade.price)
    // @ts-ignore
    autoClickAmount += selectedUpgrade.multiplier
    // @ts-ignore
    let multiplierAmount = selectedUpgrade.quantity * selectedUpgrade.multiplier
    // @ts-ignore
    updatedQuantity.innerHTML = `<p class="mb-1">x${selectedUpgrade.quantity}</p><p>${multiplierAmount}/3sec</p>`
    // @ts-ignore
    updatedPrice.innerHTML = `<p class="mb-1">COST:</p><p>${selectedUpgrade.price.toFixed(0)}</p>`
    // console.log(selectedUpgrade.quantity)
    drawCounter()
    drawUpgradeCounter('auto')
  }
}
function drawUpgradeCounter(upgradeType) {
  let upgradeCount = document.getElementById('upgradeCount')

  if (upgradeType == 'click') {
    // @ts-ignore
    let clickCount = upgradeCount.querySelector('.upgradedClick')
    // @ts-ignore
    clickCount.innerText = `+${clickerAmount} /perclick`
    console.log(clickCount)
  } else if (upgradeType == 'auto') {
    // @ts-ignore
    let autoClickCount = upgradeCount.querySelector('.upgradedAuto')
    // @ts-ignore
    autoClickCount.innerText = `+${autoClickAmount} /3sec`
    console.log(autoClickAmount)
  }
}
setInterval(addAutoPresent, 3000)
drawCounter()