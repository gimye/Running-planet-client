export interface CreateCrew {
  crewName: string;
  limitMemberCnt: number;
  limitRunScore: number;
  category: string;
  tag: string[];
  approvalType: string
  introduction: string;
  rule: Rule
}

export interface Rule {
  weeklyRun: number;
  distance: number;
}