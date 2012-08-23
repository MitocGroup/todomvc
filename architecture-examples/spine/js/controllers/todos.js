// Generated by CoffeeScript 1.3.3
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.Todos = (function(_super) {
    var ENTER_KEY, TPL;

    __extends(Todos, _super);

    ENTER_KEY = 13;

    TPL = Handlebars.compile($('#todo-template').html());

    Todos.prototype.elements = {
      '.edit': 'editElem'
    };

    Todos.prototype.events = {
      'click    .destroy': 'remove',
      'click    .toggle': 'toggleStatus',
      'dblclick label': 'edit',
      'keyup    .edit': 'finishEditOnEnter',
      'blur     .edit': 'finishEdit'
    };

    function Todos() {
      this.render = __bind(this.render, this);
      Todos.__super__.constructor.apply(this, arguments);
      this.todo.bind('update', this.render);
      this.todo.bind('destroy', this.release);
    }

    Todos.prototype.render = function() {
      this.replace(TPL(this.todo));
      return this;
    };

    Todos.prototype.remove = function() {
      return this.todo.destroy();
    };

    Todos.prototype.toggleStatus = function() {
      return this.todo.updateAttribute('completed', !this.todo.completed);
    };

    Todos.prototype.edit = function() {
      this.el.addClass('editing');
      return this.editElem.focus();
    };

    Todos.prototype.finishEdit = function() {
      var val;
      this.el.removeClass('editing');
      val = $.trim(this.editElem.val());
      if (val) {
        return this.todo.updateAttribute('title', val);
      } else {
        return this.remove();
      }
    };

    Todos.prototype.finishEditOnEnter = function(e) {
      if (e.which === ENTER_KEY) {
        return this.finishEdit();
      }
    };

    return Todos;

  })(Spine.Controller);

}).call(this);
