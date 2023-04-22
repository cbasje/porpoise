import * as z from "zod"
import { CompleteRound, RelatedRound } from "./index"

export const Circuit = z.object({
  id: z.string(),
  created_at: z.date(),
  title: z.string(),
  wikipediaPageId: z.number().int().nullish(),
  lon: z.number().nullish(),
  lat: z.number().nullish(),
})

export interface CompleteCircuit extends z.infer<typeof Circuit> {
  rounds: CompleteRound[]
}

/**
 * RelatedCircuit contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCircuit: z.ZodSchema<CompleteCircuit> = z.lazy(() => Circuit.extend({
  rounds: RelatedRound.array(),
}))
