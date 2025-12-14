import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
    feedback: defineTable({
        rating: v.number(),
        comment: v.optional(v.string()),
        timestamp: v.number(),
    }),
    analytics_events: defineTable({
        visitor_id: v.string(),
        event_type: v.string(),
        details: v.optional(v.any()), 
        timestamp: v.number(),
    }).index("by_visitor", ["visitor_id"]),
})
