import {App} from  'vue'
import {registerElement} from './resister-element'

export default function registerApp(app:App):void{
  registerElement(app)
}