function excluirService(id, name) {
    $('#AWSRemoveLambdaModal').modal({
        backdrop: 'static'
        , keyboard: false
    }).one('click', '#delete', function (e) {
        $.ajax({
            url: '/deletar-lambda'
            , type: 'DELETE'
            , headers: {
                "id": id, "name": name
            }
            , success: function (result) {
                if (result.status == 1) {
                    alert('Lambda removido com sucesso');
                    location.reload();
                }
                else {
                    alert('Ops.. ocorreu um erro ao remover o lambda');
                    location.reload();
                }
            }
        });
    });
}

function runLambda(type, name_function)
{
    if(type == 'runLocal') {
        $("#name_function").html(name_function)
        $('#AWSLambdaRunLocal').modal({
            backdrop: 'static'
            , keyboard: false
        });
    } else if(type == 'runDeploy') {
        $("#name_function_deploy").html(name_function)
        $('#AWSLambdaDeploy').modal({
            backdrop: 'static'
            , keyboard: false
        });
    } else {
        alert('OPS');
    }
}

$(function () {
    $.get("/dados-lambdas", function (data) {
        $.each(data, function () {
            $('#table > tbody').append('<tr>' + '<td>' + this.id + '</td>' + '<td>' + this.nm_service + '</td>' + '<td>' + this.createdAt + '</td>'
                + '<td>  <a class="btn btn-danger" href="javascript:void(0)" onclick="excluirService(' + this.id + ', \''+this.nm_service+'\')">Excluir <i class="glyphicon glyphicon-trash"></i></a> &nbsp;'
                + '<a class="btn btn-info" href="javascript:void(0)" onclick="runLambda(\'runLocal\', \''+this.nm_service+'\')">Rodar Lambda local <i class="glyphicon glyphicon-cog"></i> </a> &nbsp;'
                + ' <a class="btn btn-primary" href="javascript:void(0)" onclick="runLambda(\'runDeploy\', \''+this.nm_service+'\')">Deploy Lambda <i class="glyphicon glyphicon-cog"></i> </a> </td>' +
                + '</tr>');
        });
    });
});