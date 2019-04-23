import { ApiModelProperty } from '@nestjs/swagger';
/**
 * Todo class
 */
export class Todo {
  /** id unique */
  @ApiModelProperty()
  readonly id: number;
  /** titre du todo */
  @ApiModelProperty()
  readonly title: string;
}
