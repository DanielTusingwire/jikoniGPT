import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const logEvent = mutation({
  args: {
    visitor_id: v.string(),
    event_type: v.string(),
    details: v.optional(v.any()),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("analytics_events", {
      visitor_id: args.visitor_id,
      event_type: args.event_type,
      details: args.details,
      timestamp: Date.now(),
    });
  },
});
