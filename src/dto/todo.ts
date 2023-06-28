import { ApiProperty } from '@nestjs/swagger';
/**
 * Todo class
 */
export class Todo {
  /** id unique */
  @ApiProperty()
  readonly id: number;
  /** titre du todo */
  @ApiProperty()
  readonly title: string;
  /** description du todo */
  @ApiProperty()
  readonly description: string;
  /** statut actif du todo */
  @ApiProperty()
  readonly active: boolean;
}
