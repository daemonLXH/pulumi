// *** WARNING: this file was generated by the Coconut IDL Compiler (CIDLC).  ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as coconut from "@coconut/coconut";

import {Environment} from "./environment";

export class Function extends coconut.Resource implements FunctionArgs {
    public readonly name: string;
    public environment: Environment;
    public code: coconut.asset.Asset;

    constructor(name: string, args: FunctionArgs) {
        super();
        if (name === undefined) {
            throw new Error("Missing required resource name");
        }
        this.name = name;
        if (args.environment === undefined) {
            throw new Error("Missing required argument 'environment'");
        }
        this.environment = args.environment;
        if (args.code === undefined) {
            throw new Error("Missing required argument 'code'");
        }
        this.code = args.code;
    }
}

export interface FunctionArgs {
    environment: Environment;
    code: coconut.asset.Asset;
}

