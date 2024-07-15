BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[aluno] (
    [id_aluno] INT NOT NULL IDENTITY(1,1),
    [nome] NVARCHAR(1000) NOT NULL,
    [data_nascimento] DATETIME2 NOT NULL,
    [logradouro] NVARCHAR(1000) NOT NULL,
    [numero] NVARCHAR(1000) NOT NULL,
    [bairro] NVARCHAR(1000) NOT NULL,
    [cidade] NVARCHAR(1000) NOT NULL,
    [estado] NVARCHAR(1000) NOT NULL,
    [data_criacao] DATETIME2 NOT NULL CONSTRAINT [aluno_data_criacao_df] DEFAULT CURRENT_TIMESTAMP,
    [cep] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [aluno_pkey] PRIMARY KEY CLUSTERED ([id_aluno])
);

-- CreateTable
CREATE TABLE [dbo].[curso] (
    [id_curso] INT NOT NULL IDENTITY(1,1),
    [nome] NVARCHAR(1000) NOT NULL,
    [id_professor] INT NOT NULL,
    [data_criacao] DATETIME2 NOT NULL CONSTRAINT [curso_data_criacao_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [curso_pkey] PRIMARY KEY CLUSTERED ([id_curso])
);

-- CreateTable
CREATE TABLE [dbo].[professor] (
    [id_professor] INT NOT NULL IDENTITY(1,1),
    [nome] VARCHAR(255) NOT NULL,
    [data_nascimento] DATETIME2 NOT NULL,
    [data_criacao] DATETIME2 NOT NULL CONSTRAINT [professor_data_criacao_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [professor_pkey] PRIMARY KEY CLUSTERED ([id_professor]),
    CONSTRAINT [professor_nome_key] UNIQUE NONCLUSTERED ([nome])
);

-- CreateTable
CREATE TABLE [dbo].[matricula] (
    [id_matricula] INT NOT NULL IDENTITY(1,1),
    [id_aluno] INT NOT NULL,
    [id_curso] INT NOT NULL,
    [data_criacao] DATETIME2 NOT NULL CONSTRAINT [matricula_data_criacao_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [matricula_pkey] PRIMARY KEY CLUSTERED ([id_matricula])
);

-- AddForeignKey
ALTER TABLE [dbo].[curso] ADD CONSTRAINT [curso_id_professor_fkey] FOREIGN KEY ([id_professor]) REFERENCES [dbo].[professor]([id_professor]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[matricula] ADD CONSTRAINT [matricula_id_aluno_fkey] FOREIGN KEY ([id_aluno]) REFERENCES [dbo].[aluno]([id_aluno]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[matricula] ADD CONSTRAINT [matricula_id_curso_fkey] FOREIGN KEY ([id_curso]) REFERENCES [dbo].[curso]([id_curso]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
