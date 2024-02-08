/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type AddPlayerFlagInput = {
  flag_id: Scalars['ID']['input'];
  player_id: Scalars['ID']['input'];
};

export type Ban = {
  __typename?: 'Ban';
  ban_id: Scalars['ID']['output'];
  created_at: Scalars['DateTime']['output'];
  end_at?: Maybe<Scalars['DateTime']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  player: Player;
  reason: Scalars['String']['output'];
  user: User;
};

export enum BanUntil {
  FiveDay = 'FIVE_DAY',
  Forever = 'FOREVER',
  FourDay = 'FOUR_DAY',
  OneDay = 'ONE_DAY',
  OneHour = 'ONE_HOUR',
  OneMonth = 'ONE_MONTH',
  OneYear = 'ONE_YEAR',
  SevenDay = 'SEVEN_DAY',
  SixDay = 'SIX_DAY',
  SixMonth = 'SIX_MONTH',
  ThreeDay = 'THREE_DAY',
  ThreeMonth = 'THREE_MONTH',
  TwoDay = 'TWO_DAY',
  TwoHour = 'TWO_HOUR',
  TwoMonth = 'TWO_MONTH'
}

export type BansFilter = {
  player_id?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
};

export type BansPaginator = {
  __typename?: 'BansPaginator';
  data: Array<Maybe<Ban>>;
  total: Scalars['Int']['output'];
};

export type BroadcastInput = {
  message: Scalars['String']['input'];
  server_id: Scalars['ID']['input'];
};

export type ChangeMapInput = {
  map: Scalars['String']['input'];
  server_id: Scalars['ID']['input'];
};

export enum ChatType {
  ChatAdmin = 'CHAT_ADMIN',
  ChatAll = 'CHAT_ALL',
  ChatSquad = 'CHAT_SQUAD',
  ChatTeam = 'CHAT_TEAM'
}

export type CreateBanInput = {
  ban_until?: BanUntil;
  note?: InputMaybe<Scalars['String']['input']>;
  player_id: Scalars['ID']['input'];
  reason: Scalars['String']['input'];
};

export type CreateFlagInput = {
  color: Scalars['String']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateRoleInput = {
  ban: Scalars['Boolean']['input'];
  broadcast: Scalars['Boolean']['input'];
  change_map: Scalars['Boolean']['input'];
  change_next_map: Scalars['Boolean']['input'];
  disband: Scalars['Boolean']['input'];
  end_match: Scalars['Boolean']['input'];
  force_player: Scalars['Boolean']['input'];
  kick: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  remove_player_squad: Scalars['Boolean']['input'];
  warn: Scalars['Boolean']['input'];
};

export type CreateServerInput = {
  admin_log_file_path: Scalars['String']['input'];
  game_log_file_path: Scalars['String']['input'];
  host: Scalars['String']['input'];
  password: Scalars['String']['input'];
  query_port: Scalars['Int']['input'];
  rcon_password: Scalars['String']['input'];
  rcon_port: Scalars['Int']['input'];
  user: Scalars['String']['input'];
};

export type DisbandInput = {
  server_id: Scalars['ID']['input'];
  squad_id: Scalars['String']['input'];
  team_id: Scalars['String']['input'];
};

export type EndMatchInput = {
  server_id: Scalars['ID']['input'];
};

export type Flag = {
  __typename?: 'Flag';
  color: Scalars['String']['output'];
  description: Scalars['String']['output'];
  flag_id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ForcePlayerInput = {
  player_id: Scalars['ID']['input'];
  server_id: Scalars['ID']['input'];
};

export type KickInput = {
  player_id: Scalars['ID']['input'];
  reason: Scalars['String']['input'];
  server_id: Scalars['ID']['input'];
};

export type Log = {
  created_at: Scalars['DateTime']['output'];
  log_id: Scalars['ID']['output'];
  log_type: LogType;
  server_id: Scalars['ID']['output'];
};

export type LogBroadcast = Log & {
  __typename?: 'LogBroadcast';
  created_at: Scalars['DateTime']['output'];
  log_id: Scalars['ID']['output'];
  log_type: LogType;
  message: Scalars['String']['output'];
  server_id: Scalars['ID']['output'];
  user: User;
};

export type LogCameraPossessed = Log & {
  __typename?: 'LogCameraPossessed';
  created_at: Scalars['DateTime']['output'];
  log_id: Scalars['ID']['output'];
  log_type: LogType;
  name: Scalars['String']['output'];
  server_id: Scalars['ID']['output'];
  user?: Maybe<User>;
};

export type LogChangeMap = Log & {
  __typename?: 'LogChangeMap';
  created_at: Scalars['DateTime']['output'];
  log_id: Scalars['ID']['output'];
  log_type: LogType;
  map: Scalars['String']['output'];
  server_id: Scalars['ID']['output'];
  user: User;
};

export type LogChangeNextMap = Log & {
  __typename?: 'LogChangeNextMap';
  created_at: Scalars['DateTime']['output'];
  log_id: Scalars['ID']['output'];
  log_type: LogType;
  map: Scalars['String']['output'];
  server_id: Scalars['ID']['output'];
  user: User;
};

export type LogChatMessage = Log & {
  __typename?: 'LogChatMessage';
  chat_type: ChatType;
  created_at: Scalars['DateTime']['output'];
  log_id: Scalars['ID']['output'];
  log_type: LogType;
  message: Scalars['String']['output'];
  player: Player;
  server_id: Scalars['ID']['output'];
};

export type LogDisband = Log & {
  __typename?: 'LogDisband';
  created_at: Scalars['DateTime']['output'];
  log_id: Scalars['ID']['output'];
  log_type: LogType;
  server_id: Scalars['ID']['output'];
  squad_id: Scalars['String']['output'];
  team_id: Scalars['String']['output'];
  user: User;
};

export type LogEndMatch = Log & {
  __typename?: 'LogEndMatch';
  created_at: Scalars['DateTime']['output'];
  log_id: Scalars['ID']['output'];
  log_type: LogType;
  server_id: Scalars['ID']['output'];
  user: User;
};

export type LogForcePlayer = Log & {
  __typename?: 'LogForcePlayer';
  created_at: Scalars['DateTime']['output'];
  log_id: Scalars['ID']['output'];
  log_type: LogType;
  player: Player;
  server_id: Scalars['ID']['output'];
  user: User;
};

export type LogKick = Log & {
  __typename?: 'LogKick';
  created_at: Scalars['DateTime']['output'];
  log_id: Scalars['ID']['output'];
  log_type: LogType;
  player: Player;
  reason: Scalars['String']['output'];
  server_id: Scalars['ID']['output'];
  user: User;
};

export type LogPlayerConnected = Log & {
  __typename?: 'LogPlayerConnected';
  created_at: Scalars['DateTime']['output'];
  log_id: Scalars['ID']['output'];
  log_type: LogType;
  player: Player;
  server_id: Scalars['ID']['output'];
};

export type LogPlayerDied = Log & {
  __typename?: 'LogPlayerDied';
  attacker_player: Player;
  created_at: Scalars['DateTime']['output'];
  is_teamkill: Scalars['Boolean']['output'];
  log_id: Scalars['ID']['output'];
  log_type: LogType;
  server_id: Scalars['ID']['output'];
  victim_player: Player;
};

export type LogPlayerDisconnected = Log & {
  __typename?: 'LogPlayerDisconnected';
  created_at: Scalars['DateTime']['output'];
  log_id: Scalars['ID']['output'];
  log_type: LogType;
  player: Player;
  server_id: Scalars['ID']['output'];
};

export type LogRemovePlayerSquad = Log & {
  __typename?: 'LogRemovePlayerSquad';
  created_at: Scalars['DateTime']['output'];
  log_id: Scalars['ID']['output'];
  log_type: LogType;
  player: Player;
  server_id: Scalars['ID']['output'];
  user: User;
};

export type LogSquadCreated = Log & {
  __typename?: 'LogSquadCreated';
  created_at: Scalars['DateTime']['output'];
  log_id: Scalars['ID']['output'];
  log_type: LogType;
  player: Player;
  server_id: Scalars['ID']['output'];
  squad_id: Scalars['String']['output'];
  squad_name: Scalars['String']['output'];
};

export enum LogType {
  AdminBroadcast = 'ADMIN_BROADCAST',
  AdminChangeMap = 'ADMIN_CHANGE_MAP',
  AdminChangeNextMap = 'ADMIN_CHANGE_NEXT_MAP',
  AdminDisband = 'ADMIN_DISBAND',
  AdminEndMatch = 'ADMIN_END_MATCH',
  AdminForcePlayer = 'ADMIN_FORCE_PLAYER',
  AdminKick = 'ADMIN_KICK',
  AdminRemovePlayerSquad = 'ADMIN_REMOVE_PLAYER_SQUAD',
  AdminWarn = 'ADMIN_WARN',
  CameraPossessed = 'CAMERA_POSSESSED',
  CameraUnpossessed = 'CAMERA_UNPOSSESSED',
  ChatMessage = 'CHAT_MESSAGE',
  PlayerConnected = 'PLAYER_CONNECTED',
  PlayerDied = 'PLAYER_DIED',
  PlayerDisconnected = 'PLAYER_DISCONNECTED',
  SquadCreated = 'SQUAD_CREATED'
}

export type LogUnCameraPossessed = Log & {
  __typename?: 'LogUnCameraPossessed';
  created_at: Scalars['DateTime']['output'];
  log_id: Scalars['ID']['output'];
  log_type: LogType;
  name: Scalars['String']['output'];
  server_id: Scalars['ID']['output'];
  user?: Maybe<User>;
};

export type LogWarn = Log & {
  __typename?: 'LogWarn';
  created_at: Scalars['DateTime']['output'];
  log_id: Scalars['ID']['output'];
  log_type: LogType;
  player: Player;
  reason: Scalars['String']['output'];
  server_id: Scalars['ID']['output'];
  user: User;
};

export type LogsFilter = {
  player_id?: InputMaybe<Scalars['ID']['input']>;
  server_id?: InputMaybe<Scalars['ID']['input']>;
  user_id?: InputMaybe<Scalars['ID']['input']>;
};

export type LogsPaginator = {
  __typename?: 'LogsPaginator';
  data: Array<Maybe<LogsUnion>>;
  total: Scalars['Int']['output'];
};

export type LogsUnion = LogBroadcast | LogCameraPossessed | LogChangeMap | LogChangeNextMap | LogChatMessage | LogDisband | LogEndMatch | LogForcePlayer | LogKick | LogPlayerConnected | LogPlayerDied | LogPlayerDisconnected | LogRemovePlayerSquad | LogSquadCreated | LogUnCameraPossessed | LogWarn;

export type Mutation = {
  __typename?: 'Mutation';
  addPlayerFlag?: Maybe<Array<Maybe<Flag>>>;
  broadcast: Scalars['Boolean']['output'];
  changeMap: Scalars['Boolean']['output'];
  changeNextMap: Scalars['Boolean']['output'];
  createBan?: Maybe<Ban>;
  createFlag?: Maybe<Flag>;
  createRole: Role;
  createServer: Server;
  disband: Scalars['Boolean']['output'];
  endMatch: Scalars['Boolean']['output'];
  forcePlayer: Scalars['Boolean']['output'];
  kick: Scalars['Boolean']['output'];
  removeFlag: Array<Maybe<Flag>>;
  removePlayerFlag?: Maybe<Array<Maybe<Flag>>>;
  removePlayerFromSquad: Scalars['Boolean']['output'];
  removeRole: Role;
  unban?: Maybe<Ban>;
  updateBan?: Maybe<Ban>;
  updateRole?: Maybe<Role>;
  warn: Scalars['Boolean']['output'];
};


export type MutationAddPlayerFlagArgs = {
  addPlayerFlagInput: AddPlayerFlagInput;
};


export type MutationBroadcastArgs = {
  broadcastInput: BroadcastInput;
};


export type MutationChangeMapArgs = {
  changeMapInput: ChangeMapInput;
};


export type MutationChangeNextMapArgs = {
  changeMapInput: ChangeMapInput;
};


export type MutationCreateBanArgs = {
  createBanInput: CreateBanInput;
};


export type MutationCreateFlagArgs = {
  createFlagInput: CreateFlagInput;
};


export type MutationCreateRoleArgs = {
  createRoleInput: CreateRoleInput;
};


export type MutationCreateServerArgs = {
  createServerInput: CreateServerInput;
};


export type MutationDisbandArgs = {
  disbandInput: DisbandInput;
};


export type MutationEndMatchArgs = {
  endMatchInput: EndMatchInput;
};


export type MutationForcePlayerArgs = {
  forcePlayerInput: ForcePlayerInput;
};


export type MutationKickArgs = {
  kickInput: KickInput;
};


export type MutationRemoveFlagArgs = {
  removeFlagInput: RemoveFlagInput;
};


export type MutationRemovePlayerFlagArgs = {
  removePlayerFlagInput: RemovePlayerFlagInput;
};


export type MutationRemovePlayerFromSquadArgs = {
  removePlayerInput: RemovePlayerInput;
};


export type MutationRemoveRoleArgs = {
  role_id: Scalars['ID']['input'];
};


export type MutationUnbanArgs = {
  player_id: Scalars['ID']['input'];
};


export type MutationUpdateBanArgs = {
  updateBanInput: UpdateBanInput;
};


export type MutationUpdateRoleArgs = {
  updateRoleInput: UpdateRoleInput;
};


export type MutationWarnArgs = {
  warnInput: WarnInput;
};

export type Player = {
  __typename?: 'Player';
  bonuses: Scalars['Int']['output'];
  eos_id: Scalars['String']['output'];
  first_seen: Scalars['DateTime']['output'];
  last_seen: Scalars['DateTime']['output'];
  minutes_played: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  player_id: Scalars['ID']['output'];
  steam_id: Scalars['String']['output'];
};

export type Players = {
  __typename?: 'Players';
  is_leader: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  player_id: Scalars['ID']['output'];
  role: Scalars['String']['output'];
  squad_id?: Maybe<Scalars['String']['output']>;
  team_id: Scalars['String']['output'];
};

export type PlayersPaginator = {
  __typename?: 'PlayersPaginator';
  data: Array<Maybe<Player>>;
  total: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  ban?: Maybe<Ban>;
  bans: BansPaginator;
  checkBanPlayer: Scalars['Boolean']['output'];
  currentUser: User;
  flag?: Maybe<Flag>;
  flags: Array<Maybe<Flag>>;
  logs: LogsPaginator;
  maps: Scalars['String']['output'];
  player?: Maybe<Player>;
  playerFlags: Array<Maybe<Flag>>;
  players: PlayersPaginator;
  role: Role;
  roles: Array<Role>;
  server?: Maybe<ServerPublic>;
  servers: Array<ServerPublic>;
  user?: Maybe<User>;
  users: UsersPaginator;
};


export type QueryBanArgs = {
  ban_id: Scalars['ID']['input'];
};


export type QueryBansArgs = {
  filter?: InputMaybe<BansFilter>;
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
};


export type QueryCheckBanPlayerArgs = {
  player_id: Scalars['ID']['input'];
};


export type QueryFlagArgs = {
  flag_id: Scalars['ID']['input'];
};


export type QueryLogsArgs = {
  filter?: InputMaybe<LogsFilter>;
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
};


export type QueryMapsArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  server_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPlayerArgs = {
  player_id: Scalars['ID']['input'];
};


export type QueryPlayerFlagsArgs = {
  player_id: Scalars['ID']['input'];
};


export type QueryPlayersArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRoleArgs = {
  role_id: Scalars['ID']['input'];
};


export type QueryServerArgs = {
  server_id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  user_id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  limit?: Scalars['Int']['input'];
  offset?: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveFlagInput = {
  flag_id: Scalars['ID']['input'];
};

export type RemovePlayerFlagInput = {
  flag_id: Scalars['ID']['input'];
  player_id: Scalars['ID']['input'];
};

export type RemovePlayerInput = {
  player_id: Scalars['ID']['input'];
  server_id: Scalars['ID']['input'];
};

export type Role = {
  __typename?: 'Role';
  ban: Scalars['Boolean']['output'];
  broadcast: Scalars['Boolean']['output'];
  change_map: Scalars['Boolean']['output'];
  change_next_map: Scalars['Boolean']['output'];
  change_role: Scalars['Boolean']['output'];
  disband: Scalars['Boolean']['output'];
  end_match: Scalars['Boolean']['output'];
  flags: Scalars['Boolean']['output'];
  force_player: Scalars['Boolean']['output'];
  kick: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  remove_player_squad: Scalars['Boolean']['output'];
  role_id: Scalars['ID']['output'];
  warn: Scalars['Boolean']['output'];
};

export type Server = {
  __typename?: 'Server';
  admin_log_file_path: Scalars['String']['output'];
  game_log_file_path: Scalars['String']['output'];
  host: Scalars['String']['output'];
  password: Scalars['String']['output'];
  query_port: Scalars['Int']['output'];
  rcon_password: Scalars['String']['output'];
  rcon_port: Scalars['Int']['output'];
  server_id: Scalars['ID']['output'];
  user: Scalars['String']['output'];
};

export type ServerInfo = {
  __typename?: 'ServerInfo';
  a2sPlayerCount: Scalars['Int']['output'];
  currentLayer: Scalars['String']['output'];
  gameVersion: Scalars['String']['output'];
  matchStartTime: Scalars['Int']['output'];
  matchTimeout: Scalars['Int']['output'];
  maxPlayers: Scalars['Int']['output'];
  nextLayer: Scalars['String']['output'];
  playerCount: Scalars['Int']['output'];
  publicQueue: Scalars['Int']['output'];
  publicQueueLimit: Scalars['Int']['output'];
  reserveQueue: Scalars['Int']['output'];
  reserveSlots: Scalars['Int']['output'];
  serverName: Scalars['String']['output'];
  teamOne: Scalars['String']['output'];
  teamTwo: Scalars['String']['output'];
};

export type ServerPublic = {
  __typename?: 'ServerPublic';
  server_id: Scalars['ID']['output'];
};

export type Squad = {
  __typename?: 'Squad';
  locked: Scalars['Boolean']['output'];
  players: Array<Players>;
  size: Scalars['String']['output'];
  squad_id: Scalars['String']['output'];
  squad_name: Scalars['String']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  getLogs: LogsUnion;
  getPlayers: Array<Maybe<Players>>;
  getServerInfo: ServerInfo;
  getTeams: Teams;
};


export type SubscriptionGetLogsArgs = {
  server_id: Scalars['ID']['input'];
};


export type SubscriptionGetPlayersArgs = {
  server_id: Scalars['ID']['input'];
};


export type SubscriptionGetServerInfoArgs = {
  server_id: Scalars['ID']['input'];
};


export type SubscriptionGetTeamsArgs = {
  server_id: Scalars['ID']['input'];
};

export type Teams = {
  __typename?: 'Teams';
  teamOne: Array<Maybe<Squad>>;
  teamTwo: Array<Maybe<Squad>>;
};

export type UpdateBanInput = {
  ban_id: Scalars['ID']['input'];
  ban_until?: InputMaybe<BanUntil>;
  note?: InputMaybe<Scalars['String']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRoleInput = {
  ban?: InputMaybe<Scalars['Boolean']['input']>;
  broadcast?: InputMaybe<Scalars['Boolean']['input']>;
  change_map?: InputMaybe<Scalars['Boolean']['input']>;
  change_next_map?: InputMaybe<Scalars['Boolean']['input']>;
  disband?: InputMaybe<Scalars['Boolean']['input']>;
  end_match?: InputMaybe<Scalars['Boolean']['input']>;
  force_player?: InputMaybe<Scalars['Boolean']['input']>;
  kick?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  remove_player_squad?: InputMaybe<Scalars['Boolean']['input']>;
  role_id: Scalars['ID']['input'];
  warn?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User = {
  __typename?: 'User';
  avatar: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  role: Role;
  steam_id: Scalars['String']['output'];
  user_id: Scalars['ID']['output'];
};

export type UsersPaginator = {
  __typename?: 'UsersPaginator';
  data: Array<Maybe<User>>;
  total: Scalars['Int']['output'];
};

export type WarnInput = {
  player_id: Scalars['ID']['input'];
  reason: Scalars['String']['input'];
  server_id: Scalars['ID']['input'];
};
