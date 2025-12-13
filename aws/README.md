## Using CloudFormation

We have multiple options for IaC:
- CloudFormation 
- CDK
- Terraform


We are going to use Cloud Formation due to its simplicity and native support on AWS.

## Install Ansible 

```sh
pip install boto3 botocare
brew install ansible
```

## Edit Vault

We are going to store all of our configuration in a vault. We don't have to, but just for learning we'll use a vault even for non-sensentive information

```sh
cd aws
ansible-vault create playbooks/vaults/prod.yml
ansible-vault edit playbooks/vaults/prod.yml
ansible-vault view playbooks/vaults/prod.yml
```