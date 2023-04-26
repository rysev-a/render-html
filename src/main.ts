import { ast } from './template.pug';

type PugNodeType = 'Text' | 'Block' | 'Tag';

interface PugNode {
  type: PugNodeType;
}

type NodeType = 'text' | 'condition' | 'mixin' | 'tag';

interface Node {
  type: NodeType;
}

type PropertyType = 'attribute' | 'text' | 'condition' | 'list' | 'event';

interface Property {
  type: PropertyType;
  dependency?: Property;
}

class Parser {
  properties: {
    [key: string]: Property[];
  } = {};

  nodes: {
    [key: string]: NodeType;
  } = {};

  constructor(pugNode: PugNode) {
    console.log(pugNode);
  }
}

const parser = new Parser(ast);
