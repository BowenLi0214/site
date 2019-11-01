export interface Content {
  id: number;
  header: string;
  content?: string;
  type: BlockType;
}

export enum BlockType {
  intro = "intro",
  content = "content"
}
