export function makeRGB() {
    let colors = new Array(3).fill(1).map(
        i => Math.floor(Math.random(100)*255)
      )
    return `rgb(${colors[0]},${colors[1]},${colors[2]})`
}

const defaultColorString = makeRGB()
  
export const changeColor = (color) => {
    return {
        type: "CHANGE_BG",
        payload: {
            color: color
        }
    }
}

export const colorReducer = (state = defaultColorString, action) => {
    
    switch(action.type) {
        case "CHANGE_BG":
            const outColor = new Array(3).fill(1).map(
            i => Math.floor(Math.random(100)*255))
            return `rgb(${outColor[0]},${outColor[1]},${outColor[2]})`
        default:
            return state
    }
}