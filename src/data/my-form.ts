import {IField} from '@/data/common';

export class Form {
  fields: { [key: string]: IField } = {};
}

export class ThinkInput implements IField {
  label: string = 'О чем вы думайте';
  value: string = '';
}

export class MyForm extends Form {
  fields = {
    think: new ThinkInput(),
  };
}
