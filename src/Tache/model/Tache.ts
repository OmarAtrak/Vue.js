export default class Tache {
    // les attributs
    private _description = '';
    private _date = new Date();
    private _statut = false;
    
    // les getters et setters
    public get Description(): string {
        return this._description;
    }
    public set Description(value:string) {
        this._description = value;
    }
    public get Date() : Date{
        return this._date;
    }
    public set Date(date : Date){
        this._date = date;
    }
    public get Status() : boolean{
        return this._statut;
    }
    public set Status(status : boolean){
        this._statut = status;
    }
}