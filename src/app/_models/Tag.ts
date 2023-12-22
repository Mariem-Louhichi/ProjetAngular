export class Tag{

    static readonly G_CODE = new Tag('G_Code','red');
    static readonly PYTHON = new Tag('Python','darkred');
    static readonly PYCHARM = new Tag('Pycharm','pink');
    static readonly ARDUINO = new Tag('Arduino','green');
    static readonly TKINTER = new Tag('Tkinter','orange');
    static readonly CI = new Tag('CI/CD','red');
    static readonly AZURECLOUD = new Tag('AzureCloud','darkred');
    static readonly AZURESENTINEL = new Tag('AzureSentinel(SIEM)','pink');
    static readonly GITHUB = new Tag('GitHub','green');
    static readonly DOCKER = new Tag('Docker','orange');
    static readonly TERRAFORM = new Tag('Terraform','orange');
    static readonly BASH = new Tag('Bash','orange');
    static readonly OPENSTACK = new Tag('Openstack','orange');
    static readonly GITLABCI = new Tag('GitLabCI','orange');
    static readonly ANSIBLE = new Tag('Ansible','orange');
    static readonly YAML = new Tag('Yaml','orange');




    private constructor(private readonly key:string,public readonly col :string){

    }

    toString(){
        return this.key;
    }


}