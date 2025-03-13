declare module "3dLoader" {
    import { Object3D } from "three";
    export function loadModel(path: string): Promise<Object3D>;
  }