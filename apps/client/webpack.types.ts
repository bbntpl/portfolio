import type { Configuration } from 'webpack';

type CLIValues = boolean | string;

type EnvValues = Record<string, CLIValues>;

interface Env extends EnvValues { };

type Argv = EnvValues;

export interface WebpackConfig {
	(env?: Env, argv?: Argv): Configuration | Promise<Configuration>;
}