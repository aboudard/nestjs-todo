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
  /** description du todo */
  @ApiModelProperty()
  readonly description: string;
  /** statut actif du todo */
  @ApiModelProperty()
  readonly active: boolean;
}
