const DEV = true;
var is_array = Array.isArray;
var index_of = Array.prototype.indexOf;
var array_from = Array.from;
var define_property = Object.defineProperty;
var get_descriptor = Object.getOwnPropertyDescriptor;
const noop = () => {
};
function equals(value) {
  return value === this.v;
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
}
function safe_equals(value) {
  return !safe_not_equal(value, this.v);
}
const DERIVED = 1 << 1;
const EFFECT = 1 << 2;
const RENDER_EFFECT = 1 << 3;
const BLOCK_EFFECT = 1 << 4;
const BRANCH_EFFECT = 1 << 5;
const ROOT_EFFECT = 1 << 6;
const BOUNDARY_EFFECT = 1 << 7;
const UNOWNED = 1 << 8;
const DISCONNECTED = 1 << 9;
const CLEAN = 1 << 10;
const DIRTY = 1 << 11;
const MAYBE_DIRTY = 1 << 12;
const INERT = 1 << 13;
const DESTROYED = 1 << 14;
const EFFECT_RAN = 1 << 15;
const EFFECT_TRANSPARENT = 1 << 16;
const INSPECT_EFFECT = 1 << 18;
const HEAD_EFFECT = 1 << 19;
const EFFECT_HAS_DERIVED = 1 << 20;
const STATE_SYMBOL = Symbol("$state");
const LEGACY_PROPS = Symbol("legacy props");
function derived_references_self() {
  {
    const error = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    error.name = "Svelte error";
    throw error;
  }
}
function effect_update_depth_exceeded() {
  {
    const error = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This can happen when a reactive block or effect repeatedly sets a new value. Svelte limits the number of nested updates to prevent infinite loops
https://svelte.dev/e/effect_update_depth_exceeded`);
    error.name = "Svelte error";
    throw error;
  }
}
function hydration_failed() {
  {
    const error = new Error(`hydration_failed
Failed to hydrate the application
https://svelte.dev/e/hydration_failed`);
    error.name = "Svelte error";
    throw error;
  }
}
function rune_outside_svelte(rune) {
  {
    const error = new Error(`rune_outside_svelte
The \`${rune}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    error.name = "Svelte error";
    throw error;
  }
}
function state_unsafe_local_read() {
  {
    const error = new Error(`state_unsafe_local_read
Reading state that was created inside the same derived is forbidden. Consider using \`untrack\` to read locally created state
https://svelte.dev/e/state_unsafe_local_read`);
    error.name = "Svelte error";
    throw error;
  }
}
function state_unsafe_mutation() {
  {
    const error = new Error(`state_unsafe_mutation
Updating state inside a derived or a template expression is forbidden. If the value should not be reactive, declare it without \`$state\`
https://svelte.dev/e/state_unsafe_mutation`);
    error.name = "Svelte error";
    throw error;
  }
}
let tracing_mode_flag = false;
const HYDRATION_START = "[";
const HYDRATION_END = "]";
const HYDRATION_ERROR = {};
const FILENAME = Symbol("filename");
var bold = "font-weight: bold";
var normal = "font-weight: normal";
function hydration_mismatch(location) {
  {
    console.warn(`%c[svelte] hydration_mismatch
%c${"Hydration failed because the initial UI does not match what was rendered on the server"}
https://svelte.dev/e/hydration_mismatch`, bold, normal);
  }
}
function lifecycle_double_unmount() {
  {
    console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, bold, normal);
  }
}
function state_proxy_equality_mismatch(operator) {
  {
    console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${operator}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, bold, normal);
  }
}
function lifecycle_outside_component(name) {
  {
    const error = new Error(`lifecycle_outside_component
\`${name}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    error.name = "Svelte error";
    throw error;
  }
}
function store_invalid_shape(name) {
  {
    const error = new Error(`store_invalid_shape
\`${name}\` is not a store with a \`subscribe\` method
https://svelte.dev/e/store_invalid_shape`);
    error.name = "Svelte error";
    throw error;
  }
}
let component_context = null;
function set_component_context(context) {
  component_context = context;
}
let dev_current_component_function = null;
function set_dev_current_component_function(fn) {
  dev_current_component_function = fn;
}
function push$1(props, runes = false, fn) {
  component_context = {
    p: component_context,
    c: null,
    e: null,
    m: false,
    s: props,
    x: null,
    l: null
  };
  {
    component_context.function = fn;
    dev_current_component_function = fn;
  }
}
function pop$1(component) {
  const context_stack_item = component_context;
  if (context_stack_item !== null) {
    const component_effects = context_stack_item.e;
    if (component_effects !== null) {
      var previous_effect = active_effect;
      var previous_reaction = active_reaction;
      context_stack_item.e = null;
      try {
        for (var i = 0; i < component_effects.length; i++) {
          var component_effect = component_effects[i];
          set_active_effect(component_effect.effect);
          set_active_reaction(component_effect.reaction);
          effect(component_effect.fn);
        }
      } finally {
        set_active_effect(previous_effect);
        set_active_reaction(previous_reaction);
      }
    }
    component_context = context_stack_item.p;
    {
      dev_current_component_function = context_stack_item.p?.function ?? null;
    }
    context_stack_item.m = true;
  }
  return (
    /** @type {T} */
    {}
  );
}
function is_runes() {
  return true;
}
let inspect_effects = /* @__PURE__ */ new Set();
function set_inspect_effects(v) {
  inspect_effects = v;
}
function source(v, stack2) {
  var signal = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v,
    reactions: null,
    equals,
    rv: 0,
    wv: 0
  };
  return signal;
}
// @__NO_SIDE_EFFECTS__
function mutable_source(initial_value, immutable = false) {
  const s = source(initial_value);
  if (!immutable) {
    s.equals = safe_equals;
  }
  return s;
}
function set(source2, value) {
  if (active_reaction !== null && !untracking && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (derived_sources === null || !derived_sources.includes(source2))) {
    state_unsafe_mutation();
  }
  return internal_set(source2, value);
}
function internal_set(source2, value) {
  if (!source2.equals(value)) {
    source2.v;
    source2.v = value;
    source2.wv = increment_write_version();
    mark_reactions(source2, DIRTY);
    if (active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
      if (untracked_writes === null) {
        set_untracked_writes([source2]);
      } else {
        untracked_writes.push(source2);
      }
    }
    if (inspect_effects.size > 0) {
      const inspects = Array.from(inspect_effects);
      var previously_flushing_effect = is_flushing_effect;
      set_is_flushing_effect(true);
      try {
        for (const effect2 of inspects) {
          if ((effect2.f & CLEAN) !== 0) {
            set_signal_status(effect2, MAYBE_DIRTY);
          }
          if (check_dirtiness(effect2)) {
            update_effect(effect2);
          }
        }
      } finally {
        set_is_flushing_effect(previously_flushing_effect);
      }
      inspect_effects.clear();
    }
  }
  return value;
}
function mark_reactions(signal, status) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  var length = reactions.length;
  for (var i = 0; i < length; i++) {
    var reaction = reactions[i];
    var flags = reaction.f;
    if ((flags & DIRTY) !== 0) continue;
    if ((flags & INSPECT_EFFECT) !== 0) {
      inspect_effects.add(reaction);
      continue;
    }
    set_signal_status(reaction, status);
    if ((flags & (CLEAN | UNOWNED)) !== 0) {
      if ((flags & DERIVED) !== 0) {
        mark_reactions(
          /** @type {Derived} */
          reaction,
          MAYBE_DIRTY
        );
      } else {
        schedule_effect(
          /** @type {Effect} */
          reaction
        );
      }
    }
  }
}
function get_proxied_value(value) {
  if (value !== null && typeof value === "object" && STATE_SYMBOL in value) {
    return value[STATE_SYMBOL];
  }
  return value;
}
function init_array_prototype_warnings() {
  const array_prototype = Array.prototype;
  const cleanup = Array.__svelte_cleanup;
  if (cleanup) {
    cleanup();
  }
  const { indexOf, lastIndexOf, includes } = array_prototype;
  array_prototype.indexOf = function(item, from_index) {
    const index = indexOf.call(this, item, from_index);
    if (index === -1) {
      for (let i = from_index ?? 0; i < this.length; i += 1) {
        if (get_proxied_value(this[i]) === item) {
          state_proxy_equality_mismatch("array.indexOf(...)");
          break;
        }
      }
    }
    return index;
  };
  array_prototype.lastIndexOf = function(item, from_index) {
    const index = lastIndexOf.call(this, item, from_index ?? this.length - 1);
    if (index === -1) {
      for (let i = 0; i <= (from_index ?? this.length - 1); i += 1) {
        if (get_proxied_value(this[i]) === item) {
          state_proxy_equality_mismatch("array.lastIndexOf(...)");
          break;
        }
      }
    }
    return index;
  };
  array_prototype.includes = function(item, from_index) {
    const has = includes.call(this, item, from_index);
    if (!has) {
      for (let i = 0; i < this.length; i += 1) {
        if (get_proxied_value(this[i]) === item) {
          state_proxy_equality_mismatch("array.includes(...)");
          break;
        }
      }
    }
    return has;
  };
  Array.__svelte_cleanup = () => {
    array_prototype.indexOf = indexOf;
    array_prototype.lastIndexOf = lastIndexOf;
    array_prototype.includes = includes;
  };
}
var $window;
var first_child_getter;
var next_sibling_getter;
function init_operations() {
  if ($window !== void 0) {
    return;
  }
  $window = window;
  var element_prototype = Element.prototype;
  var node_prototype = Node.prototype;
  first_child_getter = get_descriptor(node_prototype, "firstChild").get;
  next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
  element_prototype.__click = void 0;
  element_prototype.__className = "";
  element_prototype.__attributes = null;
  element_prototype.__styles = null;
  element_prototype.__e = void 0;
  Text.prototype.__t = void 0;
  {
    element_prototype.__svelte_meta = null;
    init_array_prototype_warnings();
  }
}
function create_text(value = "") {
  return document.createTextNode(value);
}
// @__NO_SIDE_EFFECTS__
function get_first_child(node) {
  return first_child_getter.call(node);
}
// @__NO_SIDE_EFFECTS__
function get_next_sibling(node) {
  return next_sibling_getter.call(node);
}
function clear_text_content(node) {
  node.textContent = "";
}
function destroy_derived_effects(derived) {
  var effects = derived.effects;
  if (effects !== null) {
    derived.effects = null;
    for (var i = 0; i < effects.length; i += 1) {
      destroy_effect(
        /** @type {Effect} */
        effects[i]
      );
    }
  }
}
let stack = [];
function get_derived_parent_effect(derived) {
  var parent2 = derived.parent;
  while (parent2 !== null) {
    if ((parent2.f & DERIVED) === 0) {
      return (
        /** @type {Effect} */
        parent2
      );
    }
    parent2 = parent2.parent;
  }
  return null;
}
function execute_derived(derived) {
  var value;
  var prev_active_effect = active_effect;
  set_active_effect(get_derived_parent_effect(derived));
  {
    let prev_inspect_effects = inspect_effects;
    set_inspect_effects(/* @__PURE__ */ new Set());
    try {
      if (stack.includes(derived)) {
        derived_references_self();
      }
      stack.push(derived);
      destroy_derived_effects(derived);
      value = update_reaction(derived);
    } finally {
      set_active_effect(prev_active_effect);
      set_inspect_effects(prev_inspect_effects);
      stack.pop();
    }
  }
  return value;
}
function update_derived(derived) {
  var value = execute_derived(derived);
  var status = (skip_reaction || (derived.f & UNOWNED) !== 0) && derived.deps !== null ? MAYBE_DIRTY : CLEAN;
  set_signal_status(derived, status);
  if (!derived.equals(value)) {
    derived.v = value;
    derived.wv = increment_write_version();
  }
}
function push_effect(effect2, parent_effect) {
  var parent_last = parent_effect.last;
  if (parent_last === null) {
    parent_effect.last = parent_effect.first = effect2;
  } else {
    parent_last.next = effect2;
    effect2.prev = parent_last;
    parent_effect.last = effect2;
  }
}
function create_effect(type, fn, sync, push2 = true) {
  var is_root = (type & ROOT_EFFECT) !== 0;
  var parent_effect = active_effect;
  {
    while (parent_effect !== null && (parent_effect.f & INSPECT_EFFECT) !== 0) {
      parent_effect = parent_effect.parent;
    }
  }
  var effect2 = {
    ctx: component_context,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: type | DIRTY,
    first: null,
    fn,
    last: null,
    next: null,
    parent: is_root ? null : parent_effect,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  {
    effect2.component_function = dev_current_component_function;
  }
  if (sync) {
    var previously_flushing_effect = is_flushing_effect;
    try {
      set_is_flushing_effect(true);
      update_effect(effect2);
      effect2.f |= EFFECT_RAN;
    } catch (e) {
      destroy_effect(effect2);
      throw e;
    } finally {
      set_is_flushing_effect(previously_flushing_effect);
    }
  } else if (fn !== null) {
    schedule_effect(effect2);
  }
  var inert = sync && effect2.deps === null && effect2.first === null && effect2.nodes_start === null && effect2.teardown === null && (effect2.f & (EFFECT_HAS_DERIVED | BOUNDARY_EFFECT)) === 0;
  if (!inert && !is_root && push2) {
    if (parent_effect !== null) {
      push_effect(effect2, parent_effect);
    }
    if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0) {
      var derived = (
        /** @type {Derived} */
        active_reaction
      );
      (derived.effects ??= []).push(effect2);
    }
  }
  return effect2;
}
function component_root(fn) {
  const effect2 = create_effect(ROOT_EFFECT, fn, true);
  return (options = {}) => {
    return new Promise((fulfil) => {
      if (options.outro) {
        pause_effect(effect2, () => {
          destroy_effect(effect2);
          fulfil(void 0);
        });
      } else {
        destroy_effect(effect2);
        fulfil(void 0);
      }
    });
  };
}
function effect(fn) {
  return create_effect(EFFECT, fn, false);
}
function branch(fn, push2 = true) {
  return create_effect(RENDER_EFFECT | BRANCH_EFFECT, fn, true, push2);
}
function execute_effect_teardown(effect2) {
  var teardown = effect2.teardown;
  if (teardown !== null) {
    const previous_reaction = active_reaction;
    set_active_reaction(null);
    try {
      teardown.call(null);
    } finally {
      set_active_reaction(previous_reaction);
    }
  }
}
function destroy_effect_children(signal, remove_dom = false) {
  var effect2 = signal.first;
  signal.first = signal.last = null;
  while (effect2 !== null) {
    var next = effect2.next;
    destroy_effect(effect2, remove_dom);
    effect2 = next;
  }
}
function destroy_block_effect_children(signal) {
  var effect2 = signal.first;
  while (effect2 !== null) {
    var next = effect2.next;
    if ((effect2.f & BRANCH_EFFECT) === 0) {
      destroy_effect(effect2);
    }
    effect2 = next;
  }
}
function destroy_effect(effect2, remove_dom = true) {
  var removed = false;
  if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes_start !== null) {
    var node = effect2.nodes_start;
    var end = effect2.nodes_end;
    while (node !== null) {
      var next = node === end ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ get_next_sibling(node)
      );
      node.remove();
      node = next;
    }
    removed = true;
  }
  destroy_effect_children(effect2, remove_dom && !removed);
  remove_reactions(effect2, 0);
  set_signal_status(effect2, DESTROYED);
  var transitions = effect2.transitions;
  if (transitions !== null) {
    for (const transition of transitions) {
      transition.stop();
    }
  }
  execute_effect_teardown(effect2);
  var parent2 = effect2.parent;
  if (parent2 !== null && parent2.first !== null) {
    unlink_effect(effect2);
  }
  {
    effect2.component_function = null;
  }
  effect2.next = effect2.prev = effect2.teardown = effect2.ctx = effect2.deps = effect2.fn = effect2.nodes_start = effect2.nodes_end = null;
}
function unlink_effect(effect2) {
  var parent2 = effect2.parent;
  var prev = effect2.prev;
  var next = effect2.next;
  if (prev !== null) prev.next = next;
  if (next !== null) next.prev = prev;
  if (parent2 !== null) {
    if (parent2.first === effect2) parent2.first = next;
    if (parent2.last === effect2) parent2.last = prev;
  }
}
function pause_effect(effect2, callback) {
  var transitions = [];
  pause_children(effect2, transitions, true);
  run_out_transitions(transitions, () => {
    destroy_effect(effect2);
    if (callback) callback();
  });
}
function run_out_transitions(transitions, fn) {
  var remaining = transitions.length;
  if (remaining > 0) {
    var check = () => --remaining || fn();
    for (var transition of transitions) {
      transition.out(check);
    }
  } else {
    fn();
  }
}
function pause_children(effect2, transitions, local) {
  if ((effect2.f & INERT) !== 0) return;
  effect2.f ^= INERT;
  if (effect2.transitions !== null) {
    for (const transition of effect2.transitions) {
      if (transition.is_global || local) {
        transitions.push(transition);
      }
    }
  }
  var child = effect2.first;
  while (child !== null) {
    var sibling = child.next;
    var transparent = (child.f & EFFECT_TRANSPARENT) !== 0 || (child.f & BRANCH_EFFECT) !== 0;
    pause_children(child, transitions, transparent ? local : false);
    child = sibling;
  }
}
function flush_tasks() {
}
const FLUSH_MICROTASK = 0;
const FLUSH_SYNC = 1;
const handled_errors = /* @__PURE__ */ new WeakSet();
let is_throwing_error = false;
let scheduler_mode = FLUSH_MICROTASK;
let is_micro_task_queued = false;
let last_scheduled_effect = null;
let is_flushing_effect = false;
function set_is_flushing_effect(value) {
  is_flushing_effect = value;
}
let queued_root_effects = [];
let flush_count = 0;
let dev_effect_stack = [];
let active_reaction = null;
let untracking = false;
function set_active_reaction(reaction) {
  active_reaction = reaction;
}
let active_effect = null;
function set_active_effect(effect2) {
  active_effect = effect2;
}
let derived_sources = null;
let new_deps = null;
let skipped_deps = 0;
let untracked_writes = null;
function set_untracked_writes(value) {
  untracked_writes = value;
}
let write_version = 1;
let read_version = 0;
let skip_reaction = false;
function increment_write_version() {
  return ++write_version;
}
function check_dirtiness(reaction) {
  var flags = reaction.f;
  if ((flags & DIRTY) !== 0) {
    return true;
  }
  if ((flags & MAYBE_DIRTY) !== 0) {
    var dependencies = reaction.deps;
    var is_unowned = (flags & UNOWNED) !== 0;
    if (dependencies !== null) {
      var i;
      var dependency;
      var is_disconnected = (flags & DISCONNECTED) !== 0;
      var is_unowned_connected = is_unowned && active_effect !== null && !skip_reaction;
      var length = dependencies.length;
      if (is_disconnected || is_unowned_connected) {
        for (i = 0; i < length; i++) {
          dependency = dependencies[i];
          if (is_disconnected || !dependency?.reactions?.includes(reaction)) {
            (dependency.reactions ??= []).push(reaction);
          }
        }
        if (is_disconnected) {
          reaction.f ^= DISCONNECTED;
        }
      }
      for (i = 0; i < length; i++) {
        dependency = dependencies[i];
        if (check_dirtiness(
          /** @type {Derived} */
          dependency
        )) {
          update_derived(
            /** @type {Derived} */
            dependency
          );
        }
        if (dependency.wv > reaction.wv) {
          return true;
        }
      }
    }
    if (!is_unowned || active_effect !== null && !skip_reaction) {
      set_signal_status(reaction, CLEAN);
    }
  }
  return false;
}
function propagate_error(error, effect2) {
  var current = effect2;
  while (current !== null) {
    if ((current.f & BOUNDARY_EFFECT) !== 0) {
      try {
        current.fn(error);
        return;
      } catch {
        current.f ^= BOUNDARY_EFFECT;
      }
    }
    current = current.parent;
  }
  is_throwing_error = false;
  throw error;
}
function should_rethrow_error(effect2) {
  return (effect2.f & DESTROYED) === 0 && (effect2.parent === null || (effect2.parent.f & BOUNDARY_EFFECT) === 0);
}
function handle_error(error, effect2, previous_effect, component_context2) {
  if (is_throwing_error) {
    if (previous_effect === null) {
      is_throwing_error = false;
    }
    if (should_rethrow_error(effect2)) {
      throw error;
    }
    return;
  }
  if (previous_effect !== null) {
    is_throwing_error = true;
  }
  if (component_context2 === null || !(error instanceof Error) || handled_errors.has(error)) {
    propagate_error(error, effect2);
    return;
  }
  handled_errors.add(error);
  const component_stack = [];
  const effect_name = effect2.fn?.name;
  if (effect_name) {
    component_stack.push(effect_name);
  }
  let current_context = component_context2;
  while (current_context !== null) {
    {
      var filename = current_context.function?.[FILENAME];
      if (filename) {
        const file = filename.split("/").pop();
        component_stack.push(file);
      }
    }
    current_context = current_context.p;
  }
  const indent = /Firefox/.test(navigator.userAgent) ? "  " : "	";
  define_property(error, "message", {
    value: error.message + `
${component_stack.map((name) => `
${indent}in ${name}`).join("")}
`
  });
  define_property(error, "component_stack", {
    value: component_stack
  });
  const stack2 = error.stack;
  if (stack2) {
    const lines = stack2.split("\n");
    const new_lines = [];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.includes("svelte/src/internal")) {
        continue;
      }
      new_lines.push(line);
    }
    define_property(error, "stack", {
      value: new_lines.join("\n")
    });
  }
  propagate_error(error, effect2);
  if (should_rethrow_error(effect2)) {
    throw error;
  }
}
function schedule_possible_effect_self_invalidation(signal, effect2, depth = 0) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  for (var i = 0; i < reactions.length; i++) {
    var reaction = reactions[i];
    if ((reaction.f & DERIVED) !== 0) {
      schedule_possible_effect_self_invalidation(
        /** @type {Derived} */
        reaction,
        effect2,
        depth + 1
      );
    } else if (effect2 === reaction) {
      if (depth === 0) {
        set_signal_status(reaction, DIRTY);
      } else if ((reaction.f & CLEAN) !== 0) {
        set_signal_status(reaction, MAYBE_DIRTY);
      }
      schedule_effect(
        /** @type {Effect} */
        reaction
      );
    }
  }
}
function update_reaction(reaction) {
  var previous_deps = new_deps;
  var previous_skipped_deps = skipped_deps;
  var previous_untracked_writes = untracked_writes;
  var previous_reaction = active_reaction;
  var previous_skip_reaction = skip_reaction;
  var prev_derived_sources = derived_sources;
  var previous_component_context = component_context;
  var previous_untracking = untracking;
  var flags = reaction.f;
  new_deps = /** @type {null | Value[]} */
  null;
  skipped_deps = 0;
  untracked_writes = null;
  active_reaction = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
  skip_reaction = (flags & UNOWNED) !== 0 && (!is_flushing_effect || previous_reaction === null || previous_untracking);
  derived_sources = null;
  set_component_context(reaction.ctx);
  untracking = false;
  read_version++;
  try {
    var result = (
      /** @type {Function} */
      (0, reaction.fn)()
    );
    var deps = reaction.deps;
    if (new_deps !== null) {
      var i;
      remove_reactions(reaction, skipped_deps);
      if (deps !== null && skipped_deps > 0) {
        deps.length = skipped_deps + new_deps.length;
        for (i = 0; i < new_deps.length; i++) {
          deps[skipped_deps + i] = new_deps[i];
        }
      } else {
        reaction.deps = deps = new_deps;
      }
      if (!skip_reaction) {
        for (i = skipped_deps; i < deps.length; i++) {
          (deps[i].reactions ??= []).push(reaction);
        }
      }
    } else if (deps !== null && skipped_deps < deps.length) {
      remove_reactions(reaction, skipped_deps);
      deps.length = skipped_deps;
    }
    if (is_runes() && untracked_writes !== null && (reaction.f & (DERIVED | MAYBE_DIRTY | DIRTY)) === 0) {
      for (i = 0; i < /** @type {Source[]} */
      untracked_writes.length; i++) {
        schedule_possible_effect_self_invalidation(
          untracked_writes[i],
          /** @type {Effect} */
          reaction
        );
      }
    }
    if (previous_reaction !== null) {
      read_version++;
    }
    return result;
  } finally {
    new_deps = previous_deps;
    skipped_deps = previous_skipped_deps;
    untracked_writes = previous_untracked_writes;
    active_reaction = previous_reaction;
    skip_reaction = previous_skip_reaction;
    derived_sources = prev_derived_sources;
    set_component_context(previous_component_context);
    untracking = previous_untracking;
  }
}
function remove_reaction(signal, dependency) {
  let reactions = dependency.reactions;
  if (reactions !== null) {
    var index = index_of.call(reactions, signal);
    if (index !== -1) {
      var new_length = reactions.length - 1;
      if (new_length === 0) {
        reactions = dependency.reactions = null;
      } else {
        reactions[index] = reactions[new_length];
        reactions.pop();
      }
    }
  }
  if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (new_deps === null || !new_deps.includes(dependency))) {
    set_signal_status(dependency, MAYBE_DIRTY);
    if ((dependency.f & (UNOWNED | DISCONNECTED)) === 0) {
      dependency.f ^= DISCONNECTED;
    }
    destroy_derived_effects(
      /** @type {Derived} **/
      dependency
    );
    remove_reactions(
      /** @type {Derived} **/
      dependency,
      0
    );
  }
}
function remove_reactions(signal, start_index) {
  var dependencies = signal.deps;
  if (dependencies === null) return;
  for (var i = start_index; i < dependencies.length; i++) {
    remove_reaction(signal, dependencies[i]);
  }
}
function update_effect(effect2) {
  var flags = effect2.f;
  if ((flags & DESTROYED) !== 0) {
    return;
  }
  set_signal_status(effect2, CLEAN);
  var previous_effect = active_effect;
  var previous_component_context = component_context;
  active_effect = effect2;
  {
    var previous_component_fn = dev_current_component_function;
    set_dev_current_component_function(effect2.component_function);
  }
  try {
    if ((flags & BLOCK_EFFECT) !== 0) {
      destroy_block_effect_children(effect2);
    } else {
      destroy_effect_children(effect2);
    }
    execute_effect_teardown(effect2);
    var teardown = update_reaction(effect2);
    effect2.teardown = typeof teardown === "function" ? teardown : null;
    effect2.wv = write_version;
    var deps = effect2.deps;
    var dep;
    if (DEV && tracing_mode_flag && (effect2.f & DIRTY) !== 0 && deps !== null) ;
    if (DEV) {
      dev_effect_stack.push(effect2);
    }
  } catch (error) {
    handle_error(error, effect2, previous_effect, previous_component_context || effect2.ctx);
  } finally {
    active_effect = previous_effect;
    {
      set_dev_current_component_function(previous_component_fn);
    }
  }
}
function log_effect_stack() {
  console.error(
    "Last ten effects were: ",
    dev_effect_stack.slice(-10).map((d) => d.fn)
  );
  dev_effect_stack = [];
}
function infinite_loop_guard() {
  if (flush_count > 1e3) {
    flush_count = 0;
    try {
      effect_update_depth_exceeded();
    } catch (error) {
      {
        define_property(error, "stack", {
          value: ""
        });
      }
      if (last_scheduled_effect !== null) {
        {
          try {
            handle_error(error, last_scheduled_effect, null, null);
          } catch (e) {
            log_effect_stack();
            throw e;
          }
        }
      } else {
        {
          log_effect_stack();
        }
        throw error;
      }
    }
  }
  flush_count++;
}
function flush_queued_root_effects(root_effects) {
  var length = root_effects.length;
  if (length === 0) {
    return;
  }
  infinite_loop_guard();
  var previously_flushing_effect = is_flushing_effect;
  is_flushing_effect = true;
  try {
    for (var i = 0; i < length; i++) {
      var effect2 = root_effects[i];
      if ((effect2.f & CLEAN) === 0) {
        effect2.f ^= CLEAN;
      }
      var collected_effects = [];
      process_effects(effect2, collected_effects);
      flush_queued_effects(collected_effects);
    }
  } finally {
    is_flushing_effect = previously_flushing_effect;
  }
}
function flush_queued_effects(effects) {
  var length = effects.length;
  if (length === 0) return;
  for (var i = 0; i < length; i++) {
    var effect2 = effects[i];
    if ((effect2.f & (DESTROYED | INERT)) === 0) {
      try {
        if (check_dirtiness(effect2)) {
          update_effect(effect2);
          if (effect2.deps === null && effect2.first === null && effect2.nodes_start === null) {
            if (effect2.teardown === null) {
              unlink_effect(effect2);
            } else {
              effect2.fn = null;
            }
          }
        }
      } catch (error) {
        handle_error(error, effect2, null, effect2.ctx);
      }
    }
  }
}
function process_deferred() {
  is_micro_task_queued = false;
  if (flush_count > 1001) {
    return;
  }
  const previous_queued_root_effects = queued_root_effects;
  queued_root_effects = [];
  flush_queued_root_effects(previous_queued_root_effects);
  if (!is_micro_task_queued) {
    flush_count = 0;
    last_scheduled_effect = null;
    {
      dev_effect_stack = [];
    }
  }
}
function schedule_effect(signal) {
  if (scheduler_mode === FLUSH_MICROTASK) {
    if (!is_micro_task_queued) {
      is_micro_task_queued = true;
      queueMicrotask(process_deferred);
    }
  }
  last_scheduled_effect = signal;
  var effect2 = signal;
  while (effect2.parent !== null) {
    effect2 = effect2.parent;
    var flags = effect2.f;
    if ((flags & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
      if ((flags & CLEAN) === 0) return;
      effect2.f ^= CLEAN;
    }
  }
  queued_root_effects.push(effect2);
}
function process_effects(effect2, collected_effects) {
  var current_effect = effect2.first;
  var effects = [];
  main_loop: while (current_effect !== null) {
    var flags = current_effect.f;
    var is_branch = (flags & BRANCH_EFFECT) !== 0;
    var is_skippable_branch = is_branch && (flags & CLEAN) !== 0;
    var sibling = current_effect.next;
    if (!is_skippable_branch && (flags & INERT) === 0) {
      if ((flags & RENDER_EFFECT) !== 0) {
        if (is_branch) {
          current_effect.f ^= CLEAN;
        } else {
          var previous_active_reaction = active_reaction;
          try {
            active_reaction = current_effect;
            if (check_dirtiness(current_effect)) {
              update_effect(current_effect);
            }
          } catch (error) {
            handle_error(error, current_effect, null, current_effect.ctx);
          } finally {
            active_reaction = previous_active_reaction;
          }
        }
        var child = current_effect.first;
        if (child !== null) {
          current_effect = child;
          continue;
        }
      } else if ((flags & EFFECT) !== 0) {
        effects.push(current_effect);
      }
    }
    if (sibling === null) {
      let parent2 = current_effect.parent;
      while (parent2 !== null) {
        if (effect2 === parent2) {
          break main_loop;
        }
        var parent_sibling = parent2.next;
        if (parent_sibling !== null) {
          current_effect = parent_sibling;
          continue main_loop;
        }
        parent2 = parent2.parent;
      }
    }
    current_effect = sibling;
  }
  for (var i = 0; i < effects.length; i++) {
    child = effects[i];
    collected_effects.push(child);
    process_effects(child, collected_effects);
  }
}
function flush_sync(fn) {
  var previous_scheduler_mode = scheduler_mode;
  var previous_queued_root_effects = queued_root_effects;
  try {
    infinite_loop_guard();
    const root_effects = [];
    scheduler_mode = FLUSH_SYNC;
    queued_root_effects = root_effects;
    is_micro_task_queued = false;
    flush_queued_root_effects(previous_queued_root_effects);
    var result = fn?.();
    flush_tasks();
    if (queued_root_effects.length > 0 || root_effects.length > 0) {
      flush_sync();
    }
    flush_count = 0;
    last_scheduled_effect = null;
    if (DEV) {
      dev_effect_stack = [];
    }
    return result;
  } finally {
    scheduler_mode = previous_scheduler_mode;
    queued_root_effects = previous_queued_root_effects;
  }
}
function get(signal) {
  var flags = signal.f;
  var is_derived = (flags & DERIVED) !== 0;
  if (active_reaction !== null && !untracking) {
    if (derived_sources !== null && derived_sources.includes(signal)) {
      state_unsafe_local_read();
    }
    var deps = active_reaction.deps;
    if (signal.rv < read_version) {
      signal.rv = read_version;
      if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
        skipped_deps++;
      } else if (new_deps === null) {
        new_deps = [signal];
      } else if (!skip_reaction || !new_deps.includes(signal)) {
        new_deps.push(signal);
      }
    }
  } else if (is_derived && /** @type {Derived} */
  signal.deps === null && /** @type {Derived} */
  signal.effects === null) {
    var derived = (
      /** @type {Derived} */
      signal
    );
    var parent2 = derived.parent;
    if (parent2 !== null && (parent2.f & UNOWNED) === 0) {
      derived.f ^= UNOWNED;
    }
  }
  if (is_derived) {
    derived = /** @type {Derived} */
    signal;
    if (check_dirtiness(derived)) {
      update_derived(derived);
    }
  }
  return signal.v;
}
function untrack(fn) {
  var previous_untracking = untracking;
  try {
    untracking = true;
    return fn();
  } finally {
    untracking = previous_untracking;
  }
}
const STATUS_MASK = -7169;
function set_signal_status(signal, status) {
  signal.f = signal.f & STATUS_MASK | status;
}
function validate_store(store, name) {
  if (store != null && typeof store.subscribe !== "function") {
    store_invalid_shape(name);
  }
}
{
  let throw_rune_error = function(rune) {
    if (!(rune in globalThis)) {
      let value;
      Object.defineProperty(globalThis, rune, {
        configurable: true,
        // eslint-disable-next-line getter-return
        get: () => {
          if (value !== void 0) {
            return value;
          }
          rune_outside_svelte(rune);
        },
        set: (v) => {
          value = v;
        }
      });
    }
  };
  throw_rune_error("$state");
  throw_rune_error("$effect");
  throw_rune_error("$derived");
  throw_rune_error("$inspect");
  throw_rune_error("$props");
  throw_rune_error("$bindable");
}
function subscribe_to_store(store, run, invalidate) {
  if (store == null) {
    run(void 0);
    return noop;
  }
  const unsub = untrack(
    () => store.subscribe(
      run,
      // @ts-expect-error
      invalidate
    )
  );
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
var current_component = null;
function getContext(key) {
  const context_map = get_or_init_context_map("getContext");
  const result = (
    /** @type {T} */
    context_map.get(key)
  );
  return result;
}
function setContext(key, context) {
  get_or_init_context_map("setContext").set(key, context);
  return context;
}
function get_or_init_context_map(name) {
  if (current_component === null) {
    lifecycle_outside_component(name);
  }
  return current_component.c ??= new Map(get_parent_context(current_component) || void 0);
}
function push(fn) {
  current_component = { p: current_component, c: null, d: null };
  {
    current_component.function = fn;
  }
}
function pop() {
  var component = (
    /** @type {Component} */
    current_component
  );
  var ondestroy = component.d;
  if (ondestroy) {
    on_destroy.push(...ondestroy);
  }
  current_component = component.p;
}
function get_parent_context(component_context2) {
  let parent2 = component_context2.p;
  while (parent2 !== null) {
    const context_map = parent2.c;
    if (context_map !== null) {
      return context_map;
    }
    parent2 = parent2.p;
  }
  return null;
}
const BLOCK_OPEN = `<!--${HYDRATION_START}-->`;
const BLOCK_CLOSE = `<!--${HYDRATION_END}-->`;
const autoclosing_children = {
  // based on http://developers.whatwg.org/syntax.html#syntax-tag-omission
  li: { direct: ["li"] },
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt#technical_summary
  dt: { descendant: ["dt", "dd"], reset_by: ["dl"] },
  dd: { descendant: ["dt", "dd"], reset_by: ["dl"] },
  p: {
    descendant: [
      "address",
      "article",
      "aside",
      "blockquote",
      "div",
      "dl",
      "fieldset",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "main",
      "menu",
      "nav",
      "ol",
      "p",
      "pre",
      "section",
      "table",
      "ul"
    ]
  },
  rt: { descendant: ["rt", "rp"] },
  rp: { descendant: ["rt", "rp"] },
  optgroup: { descendant: ["optgroup"] },
  option: { descendant: ["option", "optgroup"] },
  thead: { direct: ["tbody", "tfoot"] },
  tbody: { direct: ["tbody", "tfoot"] },
  tfoot: { direct: ["tbody"] },
  tr: { direct: ["tr", "tbody"] },
  td: { direct: ["td", "th", "tr"] },
  th: { direct: ["td", "th", "tr"] }
};
const disallowed_children = {
  ...autoclosing_children,
  optgroup: { only: ["option", "#text"] },
  // Strictly speaking, seeing an <option> doesn't mean we're in a <select>, but we assume it here
  option: { only: ["#text"] },
  form: { descendant: ["form"] },
  a: { descendant: ["a"] },
  button: { descendant: ["button"] },
  h1: { descendant: ["h1", "h2", "h3", "h4", "h5", "h6"] },
  h2: { descendant: ["h1", "h2", "h3", "h4", "h5", "h6"] },
  h3: { descendant: ["h1", "h2", "h3", "h4", "h5", "h6"] },
  h4: { descendant: ["h1", "h2", "h3", "h4", "h5", "h6"] },
  h5: { descendant: ["h1", "h2", "h3", "h4", "h5", "h6"] },
  h6: { descendant: ["h1", "h2", "h3", "h4", "h5", "h6"] },
  // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
  select: { only: ["option", "optgroup", "#text", "hr", "script", "template"] },
  // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
  // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
  // No special behavior since these rules fall back to "in body" mode for
  // all except special table nodes which cause bad parsing behavior anyway.
  // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
  tr: { only: ["th", "td", "style", "script", "template"] },
  // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
  tbody: { only: ["tr", "style", "script", "template"] },
  thead: { only: ["tr", "style", "script", "template"] },
  tfoot: { only: ["tr", "style", "script", "template"] },
  // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
  colgroup: { only: ["col", "template"] },
  // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
  table: {
    only: ["caption", "colgroup", "tbody", "thead", "tfoot", "style", "script", "template"]
  },
  // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
  head: {
    only: [
      "base",
      "basefont",
      "bgsound",
      "link",
      "meta",
      "title",
      "noscript",
      "noframes",
      "style",
      "script",
      "template"
    ]
  },
  // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
  html: { only: ["head", "body", "frameset"] },
  frameset: { only: ["frame"] },
  "#document": { only: ["html"] }
};
function is_tag_valid_with_ancestor(child_tag, ancestors, child_loc, ancestor_loc) {
  if (child_tag.includes("-")) return null;
  const ancestor_tag = ancestors[ancestors.length - 1];
  const disallowed = disallowed_children[ancestor_tag];
  if (!disallowed) return null;
  if ("reset_by" in disallowed && disallowed.reset_by) {
    for (let i = ancestors.length - 2; i >= 0; i--) {
      const ancestor = ancestors[i];
      if (ancestor.includes("-")) return null;
      if (disallowed.reset_by.includes(ancestors[i])) {
        return null;
      }
    }
  }
  if ("descendant" in disallowed && disallowed.descendant.includes(child_tag)) {
    const child = child_loc ? `\`<${child_tag}>\` (${child_loc})` : `\`<${child_tag}>\``;
    const ancestor = ancestor_loc ? `\`<${ancestor_tag}>\` (${ancestor_loc})` : `\`<${ancestor_tag}>\``;
    return `${child} cannot be a descendant of ${ancestor}`;
  }
  return null;
}
function is_tag_valid_with_parent(child_tag, parent_tag, child_loc, parent_loc) {
  if (child_tag.includes("-") || parent_tag?.includes("-")) return null;
  if (parent_tag === "template") return null;
  const disallowed = disallowed_children[parent_tag];
  const child = child_loc ? `\`<${child_tag}>\` (${child_loc})` : `\`<${child_tag}>\``;
  const parent2 = parent_loc ? `\`<${parent_tag}>\` (${parent_loc})` : `\`<${parent_tag}>\``;
  if (disallowed) {
    if ("direct" in disallowed && disallowed.direct.includes(child_tag)) {
      return `${child} cannot be a direct child of ${parent2}`;
    }
    if ("descendant" in disallowed && disallowed.descendant.includes(child_tag)) {
      return `${child} cannot be a child of ${parent2}`;
    }
    if ("only" in disallowed && disallowed.only) {
      if (disallowed.only.includes(child_tag)) {
        return null;
      } else {
        return `${child} cannot be a child of ${parent2}. \`<${parent_tag}>\` only allows these children: ${disallowed.only.map((d) => `\`<${d}>\``).join(", ")}`;
      }
    }
  }
  switch (child_tag) {
    case "body":
    case "caption":
    case "col":
    case "colgroup":
    case "frameset":
    case "frame":
    case "head":
    case "html":
      return `${child} cannot be a child of ${parent2}`;
    case "thead":
    case "tbody":
    case "tfoot":
      return `${child} must be the child of a \`<table>\`, not a ${parent2}`;
    case "td":
    case "th":
      return `${child} must be the child of a \`<tr>\`, not a ${parent2}`;
    case "tr":
      return `\`<tr>\` must be the child of a \`<thead>\`, \`<tbody>\`, or \`<tfoot>\`, not a ${parent2}`;
  }
  return null;
}
let parent = null;
let seen;
function print_error(payload, message) {
  message = `node_invalid_placement_ssr: ${message}

This can cause content to shift around as the browser repairs the HTML, and will likely result in a \`hydration_mismatch\` warning.`;
  if ((seen ??= /* @__PURE__ */ new Set()).has(message)) return;
  seen.add(message);
  console.error(message);
  payload.head.out += `<script>console.error(${JSON.stringify(message)})<\/script>`;
}
function reset_elements() {
  let old_parent = parent;
  parent = null;
  return () => {
    parent = old_parent;
  };
}
function push_element(payload, tag, line, column) {
  var filename = (
    /** @type {Component} */
    current_component.function[FILENAME]
  );
  var child = { tag, parent, filename, line, column };
  if (parent !== null) {
    var ancestor = parent.parent;
    var ancestors = [parent.tag];
    const child_loc = filename ? `${filename}:${line}:${column}` : void 0;
    const parent_loc = parent.filename ? `${parent.filename}:${parent.line}:${parent.column}` : void 0;
    const message = is_tag_valid_with_parent(tag, parent.tag, child_loc, parent_loc);
    if (message) print_error(payload, message);
    while (ancestor != null) {
      ancestors.push(ancestor.tag);
      const ancestor_loc = ancestor.filename ? `${ancestor.filename}:${ancestor.line}:${ancestor.column}` : void 0;
      const message2 = is_tag_valid_with_ancestor(tag, ancestors, child_loc, ancestor_loc);
      if (message2) print_error(payload, message2);
      ancestor = ancestor.parent;
    }
  }
  parent = child;
}
function pop_element() {
  parent = /** @type {Element} */
  parent.parent;
}
let on_destroy = [];
function render(component, options = {}) {
  const payload = { out: "", css: /* @__PURE__ */ new Set(), head: { title: "", out: "" } };
  const prev_on_destroy = on_destroy;
  on_destroy = [];
  payload.out += BLOCK_OPEN;
  let reset_reset_element;
  {
    reset_reset_element = reset_elements();
  }
  if (options.context) {
    push();
    current_component.c = options.context;
  }
  component(payload, options.props ?? {}, {}, {});
  if (options.context) {
    pop();
  }
  if (reset_reset_element) {
    reset_reset_element();
  }
  payload.out += BLOCK_CLOSE;
  for (const cleanup of on_destroy) cleanup();
  on_destroy = prev_on_destroy;
  let head2 = payload.head.out + payload.head.title;
  for (const { hash, code } of payload.css) {
    head2 += `<style id="${hash}">${code}</style>`;
  }
  return {
    head: head2,
    html: payload.out,
    body: payload.out
  };
}
function head(payload, fn) {
  const head_payload = payload.head;
  head_payload.out += BLOCK_OPEN;
  fn(head_payload);
  head_payload.out += BLOCK_CLOSE;
}
function stringify(value) {
  return typeof value === "string" ? value : value == null ? "" : value + "";
}
function store_get(store_values, store_name, store) {
  {
    validate_store(store, store_name.slice(1));
  }
  if (store_name in store_values && store_values[store_name][0] === store) {
    return store_values[store_name][2];
  }
  store_values[store_name]?.[1]();
  store_values[store_name] = [store, null, void 0];
  const unsub = subscribe_to_store(
    store,
    /** @param {any} v */
    (v) => store_values[store_name][2] = v
  );
  store_values[store_name][1] = unsub;
  return store_values[store_name][2];
}
function unsubscribe_stores(store_values) {
  for (const store_name in store_values) {
    store_values[store_name][1]();
  }
}
function slot(payload, $$props, name, slot_props, fallback_fn) {
  var slot_fn = $$props.$$slots?.[name];
  if (slot_fn === true) {
    slot_fn = $$props["children"];
  }
  if (slot_fn !== void 0) {
    slot_fn(payload, slot_props);
  }
}
function bind_props(props_parent, props_now) {
  for (const key in props_now) {
    const initial_value = props_parent[key];
    const value = props_now[key];
    if (initial_value === void 0 && value !== void 0 && Object.getOwnPropertyDescriptor(props_parent, key)?.set) {
      props_parent[key] = value;
    }
  }
}
function ensure_array_like(array_like_or_iterator) {
  if (array_like_or_iterator) {
    return array_like_or_iterator.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
  }
  return [];
}

export { branch as A, push$1 as B, component_context as C, pop$1 as D, DEV as E, FILENAME as F, slot as G, HYDRATION_START as H, push_element as I, pop_element as J, getContext as K, LEGACY_PROPS as L, head as M, stringify as N, ensure_array_like as O, bind_props as P, store_get as Q, unsubscribe_stores as R, noop as S, safe_not_equal as T, get_first_child as a, get_next_sibling as b, HYDRATION_ERROR as c, define_property as d, HYDRATION_END as e, flush_sync as f, get as g, hydration_mismatch as h, init_operations as i, hydration_failed as j, clear_text_content as k, lifecycle_double_unmount as l, mutable_source as m, array_from as n, component_root as o, set_active_reaction as p, set_active_effect as q, render as r, set as s, is_array as t, active_effect as u, active_reaction as v, push as w, setContext as x, pop as y, create_text as z };
//# sourceMappingURL=index-D58S01WZ.js.map
