if(!lt.util.load.provided_QMARK_('lt.plugins.juniper')) {
goog.provide('lt.plugins.juniper');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.juniper.highlight = (function highlight(selector,cm,line,dom){var seq__7851_7868 = cljs.core.seq.call(null,dom.querySelectorAll(selector));var chunk__7853_7869 = null;var count__7854_7870 = 0;var i__7855_7871 = 0;while(true){
if((i__7855_7871 < count__7854_7870))
{var node_7872 = cljs.core._nth.call(null,chunk__7853_7869,i__7855_7871);var hash_7873 = cljs.core.mod.call(null,cljs.core.hash.call(null,node_7872.innerText),20);node_7872.classList.add([cljs.core.str("cm-hash-"),cljs.core.str(hash_7873)].join(''));
{
var G__7874 = seq__7851_7868;
var G__7875 = chunk__7853_7869;
var G__7876 = count__7854_7870;
var G__7877 = (i__7855_7871 + 1);
seq__7851_7868 = G__7874;
chunk__7853_7869 = G__7875;
count__7854_7870 = G__7876;
i__7855_7871 = G__7877;
continue;
}
} else
{var temp__4092__auto___7878 = cljs.core.seq.call(null,seq__7851_7868);if(temp__4092__auto___7878)
{var seq__7851_7879__$1 = temp__4092__auto___7878;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7851_7879__$1))
{var c__7112__auto___7880 = cljs.core.chunk_first.call(null,seq__7851_7879__$1);{
var G__7881 = cljs.core.chunk_rest.call(null,seq__7851_7879__$1);
var G__7882 = c__7112__auto___7880;
var G__7883 = cljs.core.count.call(null,c__7112__auto___7880);
var G__7884 = 0;
seq__7851_7868 = G__7881;
chunk__7853_7869 = G__7882;
count__7854_7870 = G__7883;
i__7855_7871 = G__7884;
continue;
}
} else
{var node_7885 = cljs.core.first.call(null,seq__7851_7879__$1);var hash_7886 = cljs.core.mod.call(null,cljs.core.hash.call(null,node_7885.innerText),20);node_7885.classList.add([cljs.core.str("cm-hash-"),cljs.core.str(hash_7886)].join(''));
{
var G__7887 = cljs.core.next.call(null,seq__7851_7879__$1);
var G__7888 = null;
var G__7889 = 0;
var G__7890 = 0;
seq__7851_7868 = G__7887;
chunk__7853_7869 = G__7888;
count__7854_7870 = G__7889;
i__7855_7871 = G__7890;
continue;
}
}
} else
{}
}
break;
}
return dom;
});
lt.plugins.juniper.selector = (function selector(types){return clojure.string.join.call(null,", ",cljs.core.map.call(null,(function (p1__7857_SHARP_){return [cljs.core.str("span.cm-"),cljs.core.str(p1__7857_SHARP_)].join('');
}),cljs.core.map.call(null,cljs.core.name,types)));
});
/**
* @param {...*} var_args
*/
lt.plugins.juniper.__BEH__highlight = (function() { 
var __BEH__highlight__delegate = function (editor,types){var selector = lt.plugins.juniper.selector.call(null,((cljs.core.empty_QMARK_.call(null,types))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",4059284974),new cljs.core.Keyword(null,"variable-2","variable-2",2752060563),new cljs.core.Keyword(null,"variable-3","variable-3",2752060564),new cljs.core.Keyword(null,"def","def",1014003575)], null):types));return lt.objs.editor.on.call(null,editor,new cljs.core.Keyword(null,"renderLine","renderLine",2207751708),((function (selector){
return (function() { 
var G__7891__delegate = function (args){return cljs.core.apply.call(null,lt.plugins.juniper.highlight,selector,args);
};
var G__7891 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__7891__delegate.call(this,args);};
G__7891.cljs$lang$maxFixedArity = 0;
G__7891.cljs$lang$applyTo = (function (arglist__7892){
var args = cljs.core.seq(arglist__7892);
return G__7891__delegate(args);
});
G__7891.cljs$core$IFn$_invoke$arity$variadic = G__7891__delegate;
return G__7891;
})()
;})(selector))
);
};
var __BEH__highlight = function (editor,var_args){
var types = null;if (arguments.length > 1) {
  types = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __BEH__highlight__delegate.call(this,editor,types);};
__BEH__highlight.cljs$lang$maxFixedArity = 1;
__BEH__highlight.cljs$lang$applyTo = (function (arglist__7893){
var editor = cljs.core.first(arglist__7893);
var types = cljs.core.rest(arglist__7893);
return __BEH__highlight__delegate(editor,types);
});
__BEH__highlight.cljs$core$IFn$_invoke$arity$variadic = __BEH__highlight__delegate;
return __BEH__highlight;
})()
;
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.juniper","highlight","lt.plugins.juniper/highlight",1484372831),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.juniper.__BEH__highlight,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));
}

//# sourceMappingURL=juniper_compiled.js.map