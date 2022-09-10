import { Module } from '@nestjs/common';
import { ChannelsModule } from './channels/channels.module';
import { FeedbackModule } from './feedbacks/feedback.module';
import { IssuesModule } from './issues/issues.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { PointsModule } from './points/points.module';

@Module({
  imports: [
    ChannelsModule,
    FeedbackModule,
    IssuesModule,
    LeaderboardModule,
    PointsModule,
  ],
})
export class BotModule {}
