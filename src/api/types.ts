import { z } from 'zod';

export const KeysSchema = z.union([
  z.literal('up'),
  z.literal('down'),
  z.literal('left'),
  z.literal('right'),
]);

export const StratagemSchema = z.object({
  id: z.number(),
  codename: z.string().or(z.null()),
  name: z.string(),
  keys: z.array(KeysSchema),
  uses: z.string(),
  cooldown: z.number(),
  activation: z.number(),
  imageUrl: z.string(),
});

export type Stratagem = z.infer<typeof StratagemSchema>;

export const StratagemListResponse = z.object({
  data: z.array(StratagemSchema),
});
