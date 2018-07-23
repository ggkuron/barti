import * as BABYLON from 'babylonjs';
import * as React from 'react';

interface IProps {
  className?: string;
}

class Game extends React.Component<IProps, {}> {
  private root: HTMLCanvasElement;
  private engine: BABYLON.Engine;
  constructor(props: IProps) {
      super(props);
  }
  public componentDidMount() {
    if(this.root) {
      this.engine = new BABYLON.Engine(this.root, true, {preserveDrawingBuffer: true, stencil: true});
      const scene = this.createScene(this.engine);
      this.engine.runRenderLoop(() => {
        scene.render();
      })
      window.addEventListener('resize', this.engine.resize);
    }
  }
  public componentWillUnmount() {
      window.removeEventListener('resize', this.engine.resize);
  }
  public render() {
    const props = this.props;
    return (
      <canvas 
        ref={this.setRoot} 
        className={props.className}
      />
    );
  }

  private setRoot = (elm: HTMLCanvasElement) => this.root = elm;

  private createScene = (engine: BABYLON.Engine) => {
    const scene = new BABYLON.Scene(engine);
    const camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(this.root, false);
    const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
    const sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene, false, BABYLON.Mesh.FRONTSIDE);
    sphere.position.y = 1;
    BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene, false);
    return scene;
  }


}

export default Game;
