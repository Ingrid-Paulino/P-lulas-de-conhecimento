import chai from "chai";
// para usar o chai-as-promised e as validações assíncronas funcionarem corretamente, precisamos fazer um return no expect conforme o exemplo
import chaiAsPromised from "chai-as-promised"; // Para testar metodos assincronos 
import sinon from "sinon";

chai.use(chaiAsPromised);

import { todosController } from "../../src/controllers/todoController";
import todoService from "../../src/services/todoServioce";

describe("controllers/todoController", () => {
  beforeEach(sinon.restore); // isso me poupa ter que ficar criando o before e o after. Quando o teste acabar, ele ja faz um restore automatico

  describe("", () => {
    it("should ", () => {});
  });

  describe("get", () => {
    it("deve disparar um erro caso o todosService.validateParamsId dispare", () => {
      // stub do service
      //Para metodos assincronos, usamos .rejects() ou .resolves()
      //Para metodo sincrono usamos .throws() ou .return()
      sinon.stub(todoService, "validateParamsId").rejects(); //rejecs para testar erro
      return chai.expect(todosController.get({}, {})).to.eventually.be.rejectes;
      // ou
      // return chai.expect(todosController.get({}, {})).to.eventually.be.rejectes;
      // ou
      // return chai.expect(todosController.get({ params: {} })).to.eventually.be.rejectes;
      // ou
      // return chai.expect(todosController.get({ params: undefined })).to.eventually.be.rejectes;

      // precisa do eventually para as asserçoes assíncronas funcionarem
    });

    it("deve disparar um erro caso o todosService.checkExists dispare", () => {
      sinon.stub(todoService, "validateParamsId").resolves({}); //foi resolvida
      sinon.stub(todoService, "checkExists").rejects();
      return chai.expect(todosController.get({}, {})).to.eventually.be.rejectes;
    });

    it("deve disparar um erro caso o todosService.get dispare", () => {
      sinon.stub(todoService, "validateParamsId").resolves({}); //foi resolvida
      sinon.stub(todoService, "checkExists").resolves();
      sinon.stub(todoService, "get").rejects();
      return chai.expect(todosController.get({}, {})).to.eventually.be.rejectes;
    });

    it("deve chamar o metodo res.json se sucesso", async () => {
      sinon.stub(todoService, "validateParamsId").resolves({}); //foi resolvida
      sinon.stub(todoService, "checkExists").resolves();
      sinon.stub(todoService, "get").resolves();
      const res = {
        // indica que res precisa ter uma propriedade json, que pode receber alguma coisa
        json: sinon.stub().returns(),
      };

      await todosController.get({}, res);
      return chai.expect(res.json.getCall(0).args[0]).to.deep.equal({});
      // res.json.getCall(0) --> pega a primeira chamada
      // .args[0] --> pega o primeiro argumento
      //Quando estamos tratando objetos ou arrays, obrigatoriamente precisamos usar o deep equal, quando for boolean, string, number, nao precisa
    });
  });

  describe("edit", () => {
    it("deve disparar um erro caso o todosService.validateParamsId dispare", () => {
      sinon.stub(todoService, "validateParamsId").rejects();
      sinon.stub(todoService, "validateBodyEdit").resolves();
      return chai.expect(todosController.edit({}, {})).to.eventually.be
        .rejectes;
    });

    it("deve disparar um erro caso o todosService.validateBodyEdit dispare", () => {
      sinon.stub(todoService, "validateParamsId").resolves({}); // resove um objeto
      sinon.stub(todoService, "validateBodyEdit").rejects();
      return chai.expect(todosController.edit({}, {})).to.eventually.be
        .rejectes;
    });

    it("deve disparar um erro caso o todosService.checkExists dispare", () => {
      sinon.stub(todoService, "validateParamsId").resolves({});
      sinon.stub(todoService, "validateBodyEdit").resolves();
      sinon.stub(todoService, "checkExists").rejects();
      return chai.expect(todosController.edit({}, {})).to.eventually.be
        .rejectes;
    });

    it("deve disparar um erro caso o todosService.edit dispare", () => {
      sinon.stub(todoService, "validateParamsId").resolves({});
      sinon.stub(todoService, "checkExists").resolves();
      sinon.stub(todoService, "checkExists").resolves();
      sinon.stub(todoService, "edit").rejects();
      return chai.expect(todosController.edit({}, {})).to.eventually.be
        .rejectes;
    });

    it("deve disparar um erro caso o todosService.get dispare", async () => {
      sinon.stub(todoService, "validateParamsId").resolves({});
      sinon.stub(todoService, "checkExists").resolves();
      sinon.stub(todoService, "checkExists").resolves();
      sinon.stub(todoService, "edit").resolves();
      sinon.stub(todoService, "get").rejects();
      return chai.expect(todosController.edit({}, {})).to.eventually.be
        .rejectes;
    });

    it("deve chamar o metodo res.json se sucesso", async () => {
      sinon.stub(todoService, "validateParamsId").resolves({});
      sinon.stub(todoService, "checkExists").resolves();
      sinon.stub(todoService, "checkExists").resolves();
      sinon.stub(todoService, "edit").resolves();
      sinon.stub(todoService, "get").resolves({});

      const res = {
        json: sinon.stub().returns(),
      };

      await todosController.edit({}, res);
      return chai.expect(res.json.getCall(0).args[0]).to.deep.equal({});
    });
  });

  describe("add", () => {
    it("deve disparar um erro caso o todosService.validateBodyAdd dispare", () => {
      sinon.stub(todoService, "validateBodyAdd").rejects();
      return chai.expect(todosController.add({}, {})).to.eventually.be.rejectes;
    });

    it("deve disparar um erro caso o todosService.add dispare", () => {
      sinon.stub(todoService, "validateBodyAdd").resolves();
      sinon.stub(todoService, "add").rejects();
      return chai.expect(todosController.add({}, {})).to.eventually.be.rejectes;
    });

    it("deve disparar um erro caso o todosService.get dispare", () => {
      sinon.stub(todoService, "validateBodyAdd").resolves();
      sinon.stub(todoService, "add").resolves();
      sinon.stub(todoService, "get").rejects();

      return chai.expect(todosController.add({}, {})).to.eventually.be.rejectes;
    });

    it("deve chamar o metodo res.json se sucesso", async () => {
      sinon.stub(todoService, "validateBodyAdd").resolves();
      sinon.stub(todoService, "add").resolves();
      sinon.stub(todoService, "get").resolves({});
      const res = {
        json: sinon.stub().returns(),
      };

      await todosController.edit({}, res);
      return chai.expect(res.json.getCall(0).args[0]).to.deep.equal({});
    });

    it("deve chamar o metodo res.status se sucesso", async () => {
      sinon.stub(todoService, "validateBodyAdd").resolves();
      sinon.stub(todoService, "add").resolves();
      sinon.stub(todoService, "get").resolves({});
      const res = {
        status: sinon.stub().callsFake(() => res), //callsFake chama uma função que retorna o res
      };

      await todosController.edit({}, res);
      return chai.expect(res.status.getCall(0).args[0]).to.equal(201);
    });
  });
});
