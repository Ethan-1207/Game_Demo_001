import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Hello')
export class Hello extends Component {
    start() {
        console.log('Hello, World QT !');
    }

    update(deltaTime: number) {
        
    }
}


