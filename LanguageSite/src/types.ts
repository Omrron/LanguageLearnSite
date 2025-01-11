export interface IWord 
{
    Origin : string,
    Translation : string,
    Phonetic: string
}

export class word implements IWord
{
    Origin: string
    Translation: string
    Phonetic: string

    public constructor(origin:string, translation:string = "", phonetic:string = "")
    {
        this.Origin = origin;
        this.Translation = translation,
        this.Phonetic = phonetic
    }
}

declare module 'csstype' {
    interface Properties {
        [key: `--${string}`]: string | number | null | undefined;
    }
  }  